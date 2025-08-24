import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    name: "Mayur",
    location: "India",
    avatar_url: "https://avatars.githubusercontent.com/u/78952059?v=4",
    login: "gutaussehend-Harshal",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const data = await fetch(
      "https://api.github.com/users/gutaussehend-Harshal"
    );
    const json = await data.json();
    setUser(json);
  };

  const { avatar_url, name, location, login } = user;

  return (
    <div className="user-card">
      <img src={avatar_url} alt="Profile" className="profile-image" />
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {login}</h4>
    </div>
  );
};

export default User;
