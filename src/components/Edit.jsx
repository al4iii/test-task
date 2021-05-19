import React, { useState } from "react";
import "antd/dist/antd.css";
import {
  Form,
  Input,
  Button,
  Col,
  Typography,
  Select,
  Cascader,
  Radio,
  Space,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../redux/task-reduser";
import { Redirect, useHistory } from "react-router";
import { Option } from "antd/lib/mentions";
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
  const [status, setStatus] = useState(0);
  const validateMessages = {
    required: "${label} is required!",
  };
  const onFinish = (values) =>
    dispatch(editTask(values.user.text, taskId, developer, token, status));
  if (isEdit) {
    return <Redirect to={"/content"} />;
  }
  const onChange = (values) => {   
    setStatus(values.target.value);    
  };
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
            
          >
            <Input.TextArea placeholder={message} />
            <Input.Group>
              <Radio.Group onChange={onChange}>
                <Space direction="vertical">
                  <Radio value={0}>Task not completed</Radio>
                  <Radio value={1}>Task not completed, edited by admin</Radio>
                  <Radio value={10}>Task completed</Radio>
                  <Radio value={11}>Task edited by admin and completed </Radio>
                </Space>
              </Radio.Group>
            </Input.Group>
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
