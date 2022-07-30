import React from "react";

type Props = {
  contents: string | undefined;
};

const Text = ({ contents }: Props) => {
  return <div>{contents}</div>;
};

export default Text;
