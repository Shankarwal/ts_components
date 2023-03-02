type ConatinerProps = {
  styles: React.CSSProperties;
};

const Container = ({ styles }: ConatinerProps) => {
  return <div style={styles}>Container</div>;
};

export default Container;
