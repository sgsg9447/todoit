import React, { useState } from "react";
import Card from "../components/viewcontainer/Card";
import TodoHeader from "../components/todoheadercontainer/TodoHeader";
import TodoList from "../components/todolistcontainer/TodoList";
import styled from "@emotion/styled";
import TodoCreate from "../components/todocreatecontainer/TodoCreate";
import dayjs from "dayjs";
import IconBtn from "../components/viewcontainer/IconBtn";

type Props = {};

const Mainpage = (props: Props) => {
  const [visibleTodoCreate, setVisibleTodoCreate] = useState(false);
  const toggleVisibleTodoCreate = () => {
    setVisibleTodoCreate(!visibleTodoCreate);
  };
  const [today, setToday] = useState(dayjs());
  return (
    <MainpageContainer>
      <DayBtnContainer>
        <IconBtn
          handleOnClick={() => {
            setToday(today.subtract(1, "d"));
          }}
        >
          이전일자보기
        </IconBtn>
        <IconBtn
          handleOnClick={() => {
            setToday(today.add(1, "d"));
          }}
        >
          다음일자보기
        </IconBtn>
      </DayBtnContainer>
      <Card>
        <TodoHeader today={today} />
        <TodoList today={today} />

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

const DayBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
