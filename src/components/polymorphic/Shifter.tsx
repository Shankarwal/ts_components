import React from "react";

type ShifterOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type ShifterProps<E extends React.ElementType> = ShifterOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ShifterOwnProps<E>>;

const Shifter = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: ShifterProps<E>) => {
  const Componenet = as || "div";
  return <Componenet className={`${color}-${size}`}>{children}</Componenet>;
};

export default Shifter;
