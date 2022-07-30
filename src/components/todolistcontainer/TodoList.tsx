import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { todoService } from "../../api";
import { TodoItemType } from "../../api/types/todoItem";
import TodoListView from "./TodoListView";

type Props = {};

const TodoList = (props: Props) => {
  const [items, setItems] = useState<TodoItemType[]>([]);
  const today = dayjs().format("YYYY-MM-DD");
  const deleteTodoItem = async (id: number) => {
    const tempItems = [...items];
    todoService.deleteTodoItem(id).catch(() => {
      setItems(tempItems);
    });
    setItems([...items].filter((item) => item.id! !== id));
  };
  useEffect(() => {
    todoService.getDateTodoItems(today).then((data: TodoItemType[]) => {
      setItems(data);
    });
  }, [today]);

  return <TodoListView items={items} handleClickDeleteBtn={deleteTodoItem} />;
};

export default TodoList;
