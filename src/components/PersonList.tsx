import Person from "./Person";
import { PersonNames } from "./Person.types";

type PersonListProps = PersonNames;

const PersonList = ({ list }: PersonListProps) => {
  return (
    <div>
      {list.map((person) => (
        <Person key={person.first} name={person} />
      ))}
    </div>
  );
};

export default PersonList;
