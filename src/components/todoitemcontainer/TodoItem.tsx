import React, { useState } from "react";
import { todoService } from "../../api";
import { TodoItemType } from "../../api/types/todoItem";
import TodoItemView from "./TodoItemView";

type Props = {
  item: TodoItemType;
  handleClickDeleteBtn: (id: number) => void;
};

const TodoItem = ({ item, handleClickDeleteBtn }: Props) => {
  const [mouseOn, setMouseOn] = useState(false);
  const [todoItem, setTodoItem] = useState(item);
  const handleMouseEnter = () => {
    setMouseOn(true);
  };
  const handleMouseOut = () => {
    setMouseOn(false);
  };

  const handleClickCheckBtn = () => {
    const temp = { ...todoItem };
    todoService.changeDoneTodoItem(item.id!, !todoItem.isDone).catch(() => {
      setTodoItem(temp);
    });
    setTodoItem({ ...todoItem, isDone: !todoItem.isDone });
  };

  return (
    <TodoItemView
      id={todoItem.id!}
      title={todoItem.todoContent}
      done={todoItem.isDone}
      mouseOn={mouseOn}
      handleMouseEnter={handleMouseEnter}
      handleMouseOut={handleMouseOut}
      handleClickDeleteBtn={() => {
        handleClickDeleteBtn(todoItem.id!);
      }}
      handleClickCheckBtn={handleClickCheckBtn}
    />
  );
};

export default TodoItem;
