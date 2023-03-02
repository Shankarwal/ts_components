type Random = {
  value: number;
};

type Positive = Random & {
  isPositive: boolean;
  isNegative?: never;
  zero?: never;
};

type Negative = Random & {
  isPositive?: never;
  isNegative: boolean;
  zero?: never;
};

type Zero = Random & {
  isPositive?: never;
  isNegative?: never;
  zero: boolean;
};

type RandomNumber = Positive | Negative | Zero;

const Random = ({ value, isPositive, isNegative, zero }: RandomNumber) => {
  return (
    <div>
      {value}{" "}
      {isPositive ? "Positive" : isNegative ? "Negative" : zero ? "Zero" : null}
    </div>
  );
};

export default Random;
