import { connectDatabase } from "../../helper/api-helper";

async function handler(req, res) {
  const client = await connectDatabase();
  const db = client.db("tasks");

  const text = req.body.text;

  const resolve = await db.collection("tasks").deleteOne({ text: text });

  res.status(200).json({
    type: "Sucess",
    message: "Deleted Task",
    tasks: resolve,
  });

  client.close();
}

export default handler;
