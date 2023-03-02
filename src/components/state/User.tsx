import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const loginHandler = () => {
    setUser({
      name: "Ram",
      email: "ram@emaple.com",
    });
  };

  //   const logoutHandler = () => {
  //     setUser(null);
  //   };

  return (
    <div>
      <button onClick={loginHandler}>Login</button>
      {/* <button onClick={logoutHandler}>Logout</button> */}
      {/* <p>Name is {user?.name}</p> */}
      <p>Name is {user.name}</p>
      {/* <p>Email is {user?.email}</p> */}
      <p>Email is {user.email}</p>
    </div>
  );
};

export default User;
