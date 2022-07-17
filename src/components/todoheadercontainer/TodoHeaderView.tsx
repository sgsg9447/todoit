import React from "react";
import styled from "@emotion/styled";

type Props = {};

const TodoHeaderView = (props: Props) => {
  return (
    <TodoHeaderContainer>
      <h1>2022년 7월 17일</h1>
      <div className="day">일요일</div>
      <div className="tasts-left">몇개 남음</div>
    </TodoHeaderContainer>
  );
};

export default TodoHeaderView;

const TodoHeaderContainer = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;
