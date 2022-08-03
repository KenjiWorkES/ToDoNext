import "../styles/main.scss";
import Head from "next/head";

import { TaskContextProvider } from "../context/tasks-context";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <TaskContextProvider>
      <Layout>
        <Head>
          <title>Next To Do</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </TaskContextProvider>
  );
}

export default MyApp;
