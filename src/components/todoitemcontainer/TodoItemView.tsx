import React from "react";
import styled from "@emotion/styled";
import IconBtn from "../viewcontainer/IconBtn";
import { MdDelete } from "react-icons/md";
import { IoMdCheckbox } from "react-icons/io";
import Text from "../viewcontainer/Text";

type Props = {
  mouseOn: boolean;
  handleMouseEnter: () => void;
  handleMouseOut: () => void;
};

const TodoItemView = ({ handleMouseEnter, handleMouseOut, mouseOn }: Props) => {
  return (
    <TodoItemContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <IconBtn>
        <IoMdCheckbox />
      </IconBtn>
      <Text />
      {mouseOn ? (
        <IconBtn>
          <MdDelete />
        </IconBtn>
      ) : (
        <div />
      )}
    </TodoItemContainer>
  );
};

export default TodoItemView;

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
  flex: 1;
`;
