import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Col, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../redux/task-reduser";
import { Redirect, useHistory } from "react-router";
const { Title } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 6,
  },
};
export const Edit = React.memo(() => {
  const isEdit = useSelector((state) => state.task.isEdit);
  const tasks = useSelector((state) => state.task.tasks);
  const history = useHistory();
  const taskId = history.location.pathname.substr(6);
  const message = tasks.find((message) => message.id === +taskId).text;
  const developer = useSelector((state) => state.task.developer);
  const token = useSelector((state) => state.task.token);
  const dispatch = useDispatch();
  const validateMessages = {
    required: "${label} is required!",
  };
  const onFinish = (values) =>
    dispatch(editTask(values.user.text, taskId, developer, token));
  if (isEdit) {
    return <Redirect to={"/content"} />;
  }
  return (
    <>
      {developer === "al4i" ? (
        <Col span={8} offset={6} className="gutter-row">
          <Title level={3} type="danger">
            Only registered users can edit Tasks
          </Title>
          <Title level={4}>Login: admin</Title>
          <Title level={4}>password: 123</Title>
        </Col>
      ) : (
        <Form
          {...layout}
          name="message"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "text"]}
            label="Text"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea placeholder={message} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
});
