import CryptoTracker from "./components/CryptoTracker";
import NavBar from "./components/NavBar";
import Exchanges from "./components/Exchanges";
import classes from "./App.module.css";
import { Container, Row, Col } from "reactstrap";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className={classes.body}>
      <NavBar />
      <Container className={classes.trackers}>
        <Col>
          <Row>
            <CryptoTracker />
          </Row>
          <Row className={classes.columncontent}>
            <Exchanges />
          </Row>
        </Col>
      </Container>
      <Footer />
    </div>
  );
}
