type ListProps<T> = {
  // T for making array dynamic  types
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h4>List of Items</h4>
      <div>
        {items.map((item, index) => {
          return (
            <p key={index} onClick={() => onClick(item)}>
              <>{item}</>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default List;
