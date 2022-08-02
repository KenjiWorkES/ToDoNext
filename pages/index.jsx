import { MongoClient } from "mongodb";
import TaskList from "../components/tasks/TasksList";

const HomePage = ({ items }) => {
  console.log(items);

  return (
    <section className="tasks">
      <TaskList items={items} />
    </section>
  );
};

export async function getServerSideProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://tasklist:olfTeN3HSrRxE4ws@cluster0.y17r7ci.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db("tasks");
  const resolve = await db.collection("tasks").find().toArray();

  console.log(resolve);

  return {
    props: {
      items: JSON.parse(JSON.stringify(resolve)),
    },
  };
}

export default HomePage;
