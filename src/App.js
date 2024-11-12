import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function App() {
  const [user, SetUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => SetUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      {user.map((el) => (
        <UserCard el={el} />
      ))}
    </div>
  );
}

export default App;
