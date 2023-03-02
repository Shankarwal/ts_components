type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type LiteralProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

const Literal = ({ position }: LiteralProps) => {
  return <div>Toast Notification on - {position}</div>;
};

export default Literal;
