import { useActionState } from "react";
import { fakeLogin } from "../API/api";
import SubmitButton from "./UseFormStatus";

export default function AuthForm() {
  const [state, submitAction, isPending] = useActionState(auth, {
    data: null,
    error: null,
  });

  async function auth(prevState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fakeLogin({ email, password });
      return { data: response, error: null };
    } catch (e) {
      return { ...prevState, error: e.message };
    }
  }

  return (
    <form action={submitAction}>
      <div className="input-field">
        <input id="email" type="email" className="validate" name="email" />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-field">
        <input
          id="password"
          type="password"
          className="validate"
          name="password"
        />
        <label htmlFor="password">Password</label>
      </div>
      <SubmitButton />
      {isPending && <p>Is Pending...</p>}
      {state.data && <p>{state.data.email} Logged in</p>}
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </form>
  );
}
