import React from "react";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  handleOnClick?: () => void;
};

const IconBtn = ({ children, handleOnClick }: Props) => {
  return <IconBtnStyle onClick={handleOnClick}>{children}</IconBtnStyle>;
};

export default IconBtn;

const IconBtnStyle = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: auto;
  position: relative;
  background-color: transparent;
`;
