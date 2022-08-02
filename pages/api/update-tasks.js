import { connectDatabase } from "../../helper/api-helper";

async function handler(req, res) {
  const client = await connectDatabase();
  const db = client.db("tasks");

  const { id, completed, text } = req.body;

  const resolve = await db.collection("tasks").updateOne(
    { text: text },
    {
      $set: { completed: completed, text: text },
    }
  );

  res.status(200).json({
    type: "Sucess",
    message: "Update Task",
    tasks: resolve,
  });

  client.close();
}

export default handler;
