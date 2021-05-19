import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sendTask } from "./../redux/task-reduser";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const Formik = () => {
  const dispatch = useDispatch();
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
  };
  const formRef = React.createRef()
  const developer = useSelector((state) => state.task.developer);
  const onFinish = (values) => {  
    dispatch( sendTask(values.user.email, values.user.name, values.user.text, developer));
    formRef.current.resetFields()
  };
  return (
    <Form
      ref={formRef}
      {...layout}
      name="message"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "text"]}
        label="Text"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
