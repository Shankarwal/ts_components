type InputProps = {
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, changeHandler }: InputProps) => {
  return <input type="text" value={value} onChange={changeHandler} />;
};

export default Input;
