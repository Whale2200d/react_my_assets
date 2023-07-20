import React from 'react';

interface ButtonRenderingProps {
  status: React.ReactNode;
}

function ChildComponent({ status }: ButtonRenderingProps) {
  return <div>{status}</div>;
}

export default ChildComponent;
