"use server";

import { Suspense, use } from "react";
import { getData } from "../API/api";

export function Post() {
  const todo = use(getData);

  if (!todo) return <p>Loading...</p>;

  return <>{todo.title}</>;
}

export default function SuspenseExample() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Post />
    </Suspense>
  );
}
