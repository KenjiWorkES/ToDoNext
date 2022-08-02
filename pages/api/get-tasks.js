import { connectDatabase } from "../../helper/api-helper";

async function handler(req, res) {
  const client = await connectDatabase();
  const db = client.db("tasks");
  const resolve = await db
    .collection("tasks")
    .find()
    .sort({ text: 1 })
    .toArray();

  res.status(201).json({
    type: "Sucess",
    message: "Geted All Tasks",
    tasks: resolve,
  });
}

client.close();

export default handler;
