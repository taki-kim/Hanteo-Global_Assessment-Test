import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = MongoClient.connect(process.env.DB_URI as string);

  return client;
}
