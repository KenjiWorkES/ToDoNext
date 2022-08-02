import "../styles/main.scss";

import { TaskContextProvider } from "../context/tasks-context";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <TaskContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TaskContextProvider>
  );
}

export default MyApp;
