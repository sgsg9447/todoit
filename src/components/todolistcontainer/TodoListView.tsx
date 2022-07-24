import React from "react";
import styled from "@emotion/styled";
import TodoItem from "../todoitemcontainer/TodoItem";
import { TodoItemType } from "../../api/types/todoItem";
type Props = {
  items: TodoItemType[];
  handleClickDeleteBtn: (id: number) => void;
};

const TodoListView = (props: Props) => {
  return (
    <TodoListContainer>
      {/* items의 값이 있으면 ? * 배열의 갯수만큼 보여주기*/}
      {props.items.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          handleClickDeleteBtn={props.handleClickDeleteBtn}
        />
      ))}
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
