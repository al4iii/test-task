import React from "react";
import { Col, Row, Typography } from "antd";
import { _Table } from "./Table";
import { Formik } from "./Form";
import Title from "antd/lib/typography/Title";

const Content = React.memo(() => {
  return (
    <>
      <Col span={6} offset={6}>
        <Title level={3}>Add new task</Title>
      </Col>
      <Col xs={24} md={{ span: 8, offset: 4 }}>
        <Formik />
      </Col>
      <Row>
        <Col xs={24} md={{ span: 12, offset: 6 }}>
          <Typography.Title level={4}></Typography.Title>
          <_Table />
        </Col>
      </Row>
    </>
  );
});

export default Content;
