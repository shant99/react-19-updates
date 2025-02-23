"use server";

export async function createUserAction(FormData) {
  const data = {
    username: FormData.get("username"),
    password: FormData.get("password"),
  };

  console.log(data, "User Data will be on server side console");
}
