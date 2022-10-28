import type { AppProps } from "next/app";
import "nextjs-breadcrumbs2/dist/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
