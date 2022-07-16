import React from "react";
import TodoList from "../components/todolistcontainer/TodoList";

type Props = {};

const Mainpage = (props: Props) => {
  return (
    <div>
      Mainpage
      <TodoList />
    </div>
  );
};

export default Mainpage;
