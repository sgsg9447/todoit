import dayjs from "dayjs";
import { useState } from "react";
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
    const toIsDone = !todoItem.isDone;
    const doneDateTime = toIsDone ? dayjs().format() : undefined;
    const nextTodoItem = {
      ...todoItem,
      isDone: toIsDone,
      dateTimes: { ...todoItem.dateTimes, doneDateTime },
    };

    // loading = true
    todoService.changeTodoItem(nextTodoItem).catch(() => {
      setTodoItem(temp);
    });
    setTodoItem(nextTodoItem);
  };

  return (
    <TodoItemView
      id={todoItem.id!}
      title={todoItem.todoContent}
      done={todoItem.isDone}
      endtime={todoItem.dateTimes.doneDateTime}
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
