import React from "react";
import styled from "@emotion/styled";
import TodoItem from "../todoitemcontainer/TodoItem";
type Props = {};

const TodoListView = (props: Props) => {
  return (
    <TodoListContainer>
      <TodoItem />
    </TodoListContainer>
  );
};

export default TodoListView;

const TodoListContainer = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;
