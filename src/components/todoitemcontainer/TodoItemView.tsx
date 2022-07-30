import React, { useEffect } from "react";
import styled from "@emotion/styled";
import IconBtn from "../viewcontainer/IconBtn";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
import Text from "../viewcontainer/Text";

type Props = {
  id: number;
  title: string;
  done: boolean;
  mouseOn: boolean;
  endtime?: string;
  handleMouseEnter: () => void;
  handleMouseOut: () => void;
  handleClickDeleteBtn: () => void;
  handleClickCheckBtn: () => void;
};

const TodoItemView = ({
  id,
  title,
  done,
  mouseOn,
  endtime,
  handleMouseEnter,
  handleMouseOut,
  handleClickDeleteBtn,
  handleClickCheckBtn,
}: Props) => {

  return (
    <TodoItemContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <IconBtn handleOnClick={handleClickCheckBtn}>
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </IconBtn>
      <Text contents={endtime}></Text>
      <Text contents={title} />
      {mouseOn ? (
        <IconBtn handleOnClick={handleClickDeleteBtn}>
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
