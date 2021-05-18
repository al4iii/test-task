import React, { useEffect } from "react";
import { Table, Typography, Image } from "antd";
import { pokemons } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../redux/task-reduser";

const columns = [
  {
    title: "User name",
    dataIndex: "username",
    key: "username",    
  },
  {
    title: "E-mail",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.height - b.height,
  },
  {
    title: "Task",
    dataIndex: "text",
    key: "text",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  // {
  //   title: "Image",
  //   dataIndex: "img",
  //   key: "img",
  //   render: (image) => <Image src={image} alt={image} width={100}/>
  // },
  // {
  //   title: "Candy",
  //   dataIndex: "candy",
  //   key: "candy",
  //   filters: [
  //     {
  //       text: "Bulbasaur Candy",
  //       value: "Bulbasaur Candy",
  //     },
  //     {
  //       text: "Charmander Candy",
  //       value: "Charmander Candy",
  //     },
  //     {
  //       text: "Squirtle Candy",
  //       value: "Squirtle Candy",
  //     },
  //   ],
  //   onFilter: (value, item)=> item.candy.includes(value)
  // },
];
// const dataSource = pokemons.map(item => ({...item, key: item.id}))

export const _Table = ({ rows = 3 }) => {
  const dataSource = useSelector((state) => state.task.tasks);
  const totatTask = useSelector((state) => state.task.total_task_count);
  const currentPage = useSelector((state) => state.task.currentPage);
  const dispatch = useDispatch(); 
  useEffect(()=> {
    dispatch(getTasks("admin", 1));
  }, []) 
  // dispatch(getTasks("admin", 1));
  const onChange = page => {
    console.log(page);
    dispatch(getTasks("admin", page));
    
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
};
