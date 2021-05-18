import { Col, Row, Slider, Typography } from "antd";
import React from "react";
import { Header } from "./components/Header";
import { _Table } from "./components/Table";
import { Formik } from "./components/Form";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/redux-store";
import { getTasks } from "./redux/task-reduser";

const App = () => {  
  return (
    <Provider store={store}>
      <Header />
      <Col xs={24} md={{ span: 8, offset: 4 }}>
        <Formik />
      </Col>
      <Row>
        <Col xs={24} md={{ span: 12, offset: 6 }}>
          <Typography.Title level={4}></Typography.Title>
          <_Table />
        </Col>
      </Row>
    </Provider>
  );
};

export default App;
