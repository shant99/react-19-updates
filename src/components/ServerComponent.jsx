"use server";

import { getData } from "../API/api";

export default async function DataPage() {
  const data = await getData();
  return <>{data.title}</>;
}
