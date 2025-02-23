import { createUserAction } from "./ServerActions";

export default function ServerActionForm() {
  return (
    <form action={createUserAction}>
      <div>
        <label>Name</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
}
