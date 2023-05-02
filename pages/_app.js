import "@/styles/globals.css";

import Sidebar from "../components/Sidebar";
import MobileWarning from "../components/MobileWarning";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MobileWarning />
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </>
  );
}
