import { connectDatabase } from "../../helper/api-helper";

async function handler(req, res) {
  const client = await connectDatabase();
  const db = client.db("tasks");

  res.status(200).json({
    type: "Sucess",
    message: "Update Task",
    tasks: resolve,
  });

  client.close();
}

export default handler;
