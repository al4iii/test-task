import React, { useEffect } from "react";
import { Table, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../redux/task-reduser";
import Text from "antd/lib/typography/Text";
import { NavLink } from "react-router-dom";
import { CheckCircleOutlined, CloseCircleOutlined, IssuesCloseOutlined, CheckOutlined} from "@ant-design/icons";

const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "User name",
    dataIndex: "username",
    key: "username",
    editable: true,
    sorter: (a, b) => a.username.length - b.username.length,
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email.length - b.email.length,
  },
  {
    title: "Task",
    dataIndex: "text",
    key: "text",
    sorter: (a, b) => a.text.length - b.text.length,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) =>
      status === 0 ? (
        <Text type="danger">
          task not completed <CloseCircleOutlined />
        </Text>
      ) : status === 1 ? (
        <Text type="danger">
          task not completed, edited by admin <IssuesCloseOutlined />
        </Text>
      ) : status === 10 ? (
        <Text type="success">
          task completed <CheckCircleOutlined />
        </Text>
      ) : status === 11 ? (
        <Text type="success">
          task edited by admin and completed <CheckOutlined />
        </Text>
      ) : (
        ""
      ),
  },
  {
    title: " ",
    dataIndex: "id",
    key: "id",
    render: (id) => (
      <Button type="primary">
        <NavLink to={`/edit/${id}`}>Edit</NavLink>
      </Button>
    ),
  },
];

export const _Table = React.memo(({ rows = 3 }) => {
  const dataSource = useSelector((state) => state.task.tasks);
  const totatTask = useSelector((state) => state.task.total_task_count);
  const currentPage = useSelector((state) => state.task.currentPage);
  const developer = useSelector((state) => state.task.developer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks(developer, 1));
  }, [developer]);
  const onChange = (page) => {
    dispatch(getTasks(developer, page));
  };
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{
        pageSize: rows,
        total: totatTask,
        current: currentPage,
        onChange: onChange,
        defaultCurrent: 1,
        showSizeChanger: false,
      }}
    />
  );
});
