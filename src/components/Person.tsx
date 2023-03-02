import { Name } from "./Person.types";

type PersobProps = {
  name: Name;
};

function Person({ name: { first, last } }: PersobProps) {
  return (
    <h3>
      {first} {last}
    </h3>
  );
}

export default Person;
