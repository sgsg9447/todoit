import React, { useState } from "react";
import TodoItemView from "./TodoItemView";

type Props = {};

const TodoItem = (props: Props) => {
  const [mouseOn, setMouseOn] = useState(false);
  const handleMouseEnter = () => {
    setMouseOn(true);
  };
  const handleMouseOut = () => {
    setMouseOn(false);
  };
  return (
    <TodoItemView
      mouseOn={mouseOn}
      handleMouseEnter={handleMouseEnter}
      handleMouseOut={handleMouseOut}
    />
  );
};

export default TodoItem;
