type HeadingProps = {
  children: string;
};

const Heading = ({ children }: HeadingProps) => {
  return <div>{children}</div>;
};

export default Heading;
