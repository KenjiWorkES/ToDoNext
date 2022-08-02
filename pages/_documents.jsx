import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocuments extends Document {
  render() {
    <Html>
      <Head />
      <body data-theme="light">
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}

export default MyDocuments;
