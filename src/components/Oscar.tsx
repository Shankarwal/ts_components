type OscarProps = {
  children: JSX.Element | React.ReactNode;
};

const Oscar = ({ children }: OscarProps) => {
  return <div>{children}</div>;
};

export default Oscar;
