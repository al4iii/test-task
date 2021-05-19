import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/task-reduser";
import Content from "./content";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 5 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.task.token);
  const onFinish = (values) => {
    dispatch(login(values.username, values.password));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {!!token ? (
        <Content />
      ) : (
        <Form
          {...layout}
          offset={8}
          span={8}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};
