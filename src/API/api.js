"use server";

export const fakeLogin = ({ email, password }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (email && password) {
        resolve({ email, password });
      } else {
        reject({ message: "Invalid email or password" });
      }
    }, 1000)
  );

export const getData = fetch(
  "https://jsonplaceholder.typicode.com/todos/1"
).then((r) => r.json());

export const fetchUsers = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((r) => r.json());
