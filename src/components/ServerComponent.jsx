"use server";

const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return data.json();
};

export default async function DataPage() {
  const data = await getData();
  return <>{data.title}</>;
}
