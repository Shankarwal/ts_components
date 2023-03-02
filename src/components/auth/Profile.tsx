export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
      <p>Profile</p>
      <p>Hi {name}</p>
    </div>
  );
};

export default Profile;
