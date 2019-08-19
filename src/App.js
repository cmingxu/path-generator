import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import TablePlaceHolder from './components/TablePlaceHolder'

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>第三方视觉软件，显示当前图像</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <TablePlaceHolder></TablePlaceHolder>
          </Col>
          <Col>
            <TablePlaceHolder></TablePlaceHolder>
          </Col>
          <Col>
            <TablePlaceHolder></TablePlaceHolder>
            <Button>点击生成</Button>
          </Col>
          <Col>
            <TablePlaceHolder></TablePlaceHolder>
            <Button>点击生成</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
