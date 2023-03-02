type StatusProps = {
  status: "success" | "error" | "loading";
};

export const Status = ({ status }: StatusProps) => {
  let message;

  if (status === "success") {
    message = "Success";
  } else if (status === "error") {
    message = "Error";
  } else if (status === "loading") {
    message = "Loading";
  }

  return <div>Status - {message}</div>;
};
