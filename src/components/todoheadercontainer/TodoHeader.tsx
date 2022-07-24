import React from "react";
import TodoHeaderView from "./TodoHeaderView";
import dayjs from "dayjs";
import "dayjs/locale/ko";

type Props = {};

const TodoHeader = (props: Props) => {
  dayjs.locale("ko");
  const today = dayjs().format("YYYY년 M월 D일");
  const day = dayjs().format("dddd");
  return <TodoHeaderView date={today} day={day} remainingCount={1} />;
};

export default TodoHeader;
