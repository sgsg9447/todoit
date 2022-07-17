import React from "react";
import styled from "@emotion/styled";

type Props = {};

const TodoCreateView = (props: Props) => {
  const handleInputKeydown = (event: React.KeyboardEvent<HTMLElement>) => {
    if ("enter" === event.key.toLowerCase()) {
    }
  };
  return (
    <TodoCreateViewStyle>
      <TodoCreateInput placeholder="hihi" onKeyDown={handleInputKeydown} />
    </TodoCreateViewStyle>
  );
};

export default TodoCreateView;

const TodoCreateViewStyle = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoCreateInput = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid black;
`;
