import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import { Provider } from "react-redux"; // Import Provider
import store from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  return (
    isRender && (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  );
}
