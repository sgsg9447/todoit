import React from "react";
import TodoHeaderView from "./TodoHeaderView";
import dayjs from "dayjs";
import "dayjs/locale/ko";

type Props = {
  today: dayjs.Dayjs;
};

const TodoHeader = ({today}: Props) => {
  const todaystr = today.format("YYYY년 M월 D일");
  const day = today.format("dddd");
  return <TodoHeaderView date={todaystr} day={day} remainingCount={1} />;
};

export default TodoHeader;
