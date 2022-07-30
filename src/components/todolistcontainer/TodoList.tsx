import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { todoService } from "../../api";
import { TodoItemType } from "../../api/types/todoItem";
import TodoListView from "./TodoListView";

type Props = {
  today: dayjs.Dayjs;
};

const TodoList = ({ today }: Props) => {
  const [items, setItems] = useState<TodoItemType[]>([]);
  const todaystr = today.format("YYYY-MM-DD");
  const deleteTodoItem = async (id: number) => {
    const tempItems = [...items];
    todoService.deleteTodoItem(id).catch(() => {
      setItems(tempItems);
    });
    setItems([...items].filter((item) => item.id! !== id));
  };
  useEffect(() => {
    todoService.getDateTodoItems(todaystr).then((data: TodoItemType[]) => {
      setItems(data);
    });
  }, [todaystr]);

  return <TodoListView items={items} handleClickDeleteBtn={deleteTodoItem} />;
};

export default TodoList;
