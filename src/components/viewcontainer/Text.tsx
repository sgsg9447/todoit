import React from 'react'

type Props = {
  contents : string;
}

const Text = ({contents}: Props) => {
  return (
    <div>{contents}</div>
  )
}

export default Text