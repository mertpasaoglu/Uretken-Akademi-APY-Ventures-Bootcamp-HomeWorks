import React from "react";
import { useState, useEffect } from "react";
import classes from "./Exchanges.module.css";
import EzReactTable from "ez-react-table/dist/components/EzReactTable";

export default function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
  const fetchExchanges = async () => {
    try {
      const res = await fetch("https://api.coingecko.com/api/v3/exchanges");
      console.log(res);
      const data = await res.json();
      setExchanges(data);
    } catch (e) {
      console.log("alert");
    }
  };
  useEffect(() => {
    fetchExchanges();
  }, []);
  const columns = [
    {
      title: "Exchange Name",
      key: "name",
      width: 350,
      render: (value, object) => {
        return (
          <div className={classes.tableheader}>
            <img
              className={classes.coinimg}
              src={object?.image}
              alt="exchange"
            />
            <span className={classes.coinname}>{object?.name}</span>
          </div>
        );
      },
    },
    {
      title: "Country",
      center: true,
      key: "country",
      width: 250,
      render: (value, object) => <div>{value}</div>,
    },
    {
      title: "Trust Score",
      center: true,
      key: "trust_score",
      width: 250,
      render: (value, object) => <div>{value}</div>,
    },
    {
      title: "Year Established",
      center: true,
      key: "year_established",
      width: 250,
      render: (value, object) => {
        return <div>{value}</div>;
      },
    },
  ];
  return (
    <EzReactTable
      cols={columns}
      data={exchanges}
      darkMode
      title="Exchanges"
      defaultSort="name"
      accentColor="orange"
      tableHeight={480}
    />
  );
}
