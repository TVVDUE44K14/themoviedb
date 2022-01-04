import Layout from "/layouts/MasterPage";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { Store } from "/root/store";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
