import React from "react";
import { Divider, Col, Typography, Row, Button } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Text from "antd/lib/typography/Text";
const { Title } = Typography;

export const Header = () => {
  const developer = useSelector((state) => state.task.developer);
  return (
    <Row>
      <Col span={6} offset={6} className="gutter-row" style={{ marginTop: 10 }}>
        <Title level={2}>
          Test task by <a href="https://github.com/al4iii">al4ii</a>{" "}
        </Title>
      </Col>
      <Col span={6} offset={6} className="gutter-row">
        {developer === "al4i" ? (
          <Button type="primary" style={{ marginTop: 20 }}>
            <NavLink to={"/login"}>Login</NavLink>
          </Button>
        ) : (
          <Text keyboard> {developer}</Text>
        )}
      </Col>
      <Divider />
    </Row>
  );
};
