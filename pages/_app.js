import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
        onError: (err) => {
          console.log(err);
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
