import React, { useState } from "react";
import Card from "../components/viewcontainer/Card";
import TodoHeader from "../components/todoheadercontainer/TodoHeader";
import TodoList from "../components/todolistcontainer/TodoList";
import styled from "@emotion/styled";
import TodoCreate from "../components/todocreatecontainer/TodoCreate";

type Props = {};

const Mainpage = (props: Props) => {
  const [visibleTodoCreate, setVisibleTodoCreate] = useState(false);
  const toggleVisibleTodoCreate = () => {
    setVisibleTodoCreate(!visibleTodoCreate);
  };
  return (
    <MainpageContainer>
      <Card>
        <TodoHeader />
        <TodoList />

        <TodoBottom>
          {/* {visibleTodoCreate ? <TodoCreate /> : null} */}
          <TodoCreate />
          <AddBtn onClick={toggleVisibleTodoCreate}>+</AddBtn>
        </TodoBottom>
      </Card>
    </MainpageContainer>
  );
};

export default Mainpage;

const MainpageContainer = styled.div``;

const TodoBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddBtn = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  background-color: white;
  margin-top: -20px;
  font-size: 24px;
  cursor: pointer;
`;
