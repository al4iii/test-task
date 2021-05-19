import React from "react";
import { Divider, Col, Typography, Row, Button } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Text from "antd/lib/typography/Text";
const { Title } = Typography;

export const Header = React.memo(() => {
  const developer = useSelector((state) => state.task.developer);
  return (
    <Row>
      <Col span={6} offset={6} className="gutter-row">
        <Title level={2} style={{ marginTop: 15 }}>
          To Do List
        </Title>
      </Col>
      <Col span={6} offset={6} className="gutter-row">
        {developer === "al4i" ? (
          <Button type="primary" style={{ marginTop: 20 }}>
            <NavLink to={"/login"}>Login</NavLink>
          </Button>
        ) : (
          <Row style={{ marginTop: 20 }}>
            <Text keyboard> {developer}</Text>
          </Row>
        )}
      </Col>
      <Divider />
    </Row>
  );
});
