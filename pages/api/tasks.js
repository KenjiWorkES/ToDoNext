import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://tasklist:olfTeN3HSrRxE4ws@cluster0.y17r7ci.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("tasks");

  if (req.method === "POST") {
    const { completed, text } = req.body;

    if (!text || text.trim() === "") {
      res.status(422).json({
        type: "Error",
        message: "You cannot add a task without text!",
      });
      client.close();
      return;
    }

    const newTask = { text: text, completed: completed };
    const result = await db.collection("tasks").insertOne(newTask);
    newTask._id = result.insertedId;
    res.status(201).json({
      type: "Sucess",
      message: "Task added!",
      task: newTask,
    });
  }

  if (req.method === "GET") {
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
}

export default handler;
