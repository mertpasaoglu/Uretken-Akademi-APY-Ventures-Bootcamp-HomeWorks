import React, { useState, useEffect } from "react";
import EzReactTable from "ez-react-table";
import classes from "./CryptoTracker.module.css";

export default function CryptoTracker() {
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      console.log(res);
      const data = await res.json();
      setCoins(data);
    } catch (e) {
      alert("Api error");
    }
  };
  useEffect(() => {
    fetchCoins();
  }, []);
  const columns = [
    {
      title: "Coin Name",
      key: "name",
      width: 350,
      render: (value, object) => {
        return (
          <div className={classes.tableheader}>
            <img className={classes.coinimg} src={object?.image} alt="coin" />
            <span className={classes.coinname}>{object?.name}</span>
          </div>
        );
      },
    },
    {
      title: "Symbol",
      center: true,
      key: "symbol",
      width: 250,
      render: (value, object) => <div>{value.toUpperCase()}</div>,
    },
    {
      title: "Price",
      center: true,
      key: "current_price",
      width: 250,
      render: (value, object) => <div>{`$${value}`}</div>,
    },
    {
      title: "Change",
      center: true,
      key: "price_change_percentage_24h",
      width: 250,
      render: (value, object) => {
        return (
          <div style={{ color: /-/i.test(value) ? "red" : "green" }}>
            {value.toFixed(2)}%
          </div>
        );
      },
    },
  ];
  return (
    <EzReactTable
      cols={columns}
      data={coins}
      darkMode
      title="Crypto Tracker"
      defaultSort="name"
      accentColor="orange"
      tableHeight={480}
    />
  );
}
