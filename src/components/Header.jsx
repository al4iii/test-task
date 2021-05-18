import React from "react";
import { Divider, Col, Typography } from "antd";
import { NavLink } from "react-router-dom";
const { Title } = Typography;


export const Header = () => {
  return (
    <>
      <Col span={6} offset={6}>
        <Title level={3}>  Test task by <a href="https://github.com/al4iii">al4ii</a> </Title>
      </Col>
      <Divider />
    </>
  );
  
};

 
