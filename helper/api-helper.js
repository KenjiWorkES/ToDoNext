import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://tasklist:olfTeN3HSrRxE4ws@cluster0.y17r7ci.mongodb.net/?retryWrites=true&w=majority"
  );
  return client;
}
