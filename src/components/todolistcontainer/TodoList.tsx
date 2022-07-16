import React, { useEffect, useState } from "react";
import { AxiosTodoService } from "../../api/axios/AxiosTodoService";

type Props = {};

const TodoList = (props: Props) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const todoService = new AxiosTodoService();
    todoService.getTodoItems().then((data: any) => {
      setItem(data);
    });
  }, []);
  useEffect(() => {
    console.log(item);
  }, [item]);
  return <div>TodoList</div>;
};

export default TodoList;
