type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedin: boolean;
};

function Greet({ isLoggedin, name, messageCount = 0 }: GreetProps) {
  return (
    <div>
      {isLoggedin ? (
        <h4>{`Hi ${name}, you have ${messageCount} messages!`}</h4>
      ) : (
        "Welcome Guest"
      )}
    </div>
  );
}

export default Greet;
