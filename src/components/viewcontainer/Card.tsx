import React from "react";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;

const CardContainer = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

  * {
    /* background-color: #fff; */
  }
`;
