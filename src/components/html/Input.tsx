import React from "react";

type InputProps = React.ComponentProps<"input">;

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => console.log(e.target.valueAsDate?.toISOString())}
    />
  );
};

export default Input;
