import Celcius from './components/Celcius'
import Fahrenheit from './components/Fahrenheit'
import Kelvin from './components/Kelvin'
import { Container, Row, Col } from 'reactstrap'
import { useState } from 'react'
import "./App.css"

function App() {
  const [degree, setDegree] = useState(0);
  return (
    <div class="app-body img">
      <Container className="bg">
        <Row class="mt-5">
          <h1 class="display-1">Hava Nasıl?</h1>
          <p>Şu an sıcaklık: <span className="degree">{degree}</span> derece.</p>
        </Row>
        <Row class="buttons">
          <Col xs="6">
            <button class="btn btn-primary fw-bolder" onClick={() => setDegree(degree - 1)}>Sıcaklık Azalt</button>
          </Col>
          <Col xs="6">
            <button class="btn btn-danger fw-bolder" onClick={() => setDegree(degree + 1)}>Sıcaklık Artır</button>
          </Col>
        </Row>
        <br></br>
        <p>3 Birimde Sıcaklık Ölçümü</p>
        <Row>
          <Col xs="4"><Celcius /> <span className="degree">{degree}</span> </Col>
          <Col xs="4"><Fahrenheit /> {degree * 1.8 + 32}</Col>
          <Col xs="4"><Kelvin /> {degree + 273.15}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
