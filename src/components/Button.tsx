type ButtonProps = {
  children: string;
  clickHandler: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

const Button = ({ clickHandler, children }: ButtonProps) => {
  return (
    <button type="button" onClick={(event) => clickHandler(event, 1)}>
      {children}
    </button>
  );
};

export default Button;
