import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  return isRender && (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
