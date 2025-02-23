import { use } from "react";
import { fetchUsers } from "../API/api";

export default function UseExample() {
  const users = use(fetchUsers);

  return (
    <ul className="collection">
      {users.map((user) => (
        <li key={user.id} className="collection-item">
          {user.name}
        </li>
      ))}
    </ul>
  );
}
