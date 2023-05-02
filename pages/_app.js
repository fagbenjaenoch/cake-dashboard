import "@/styles/globals.css";

import Sidebar from "../components/Sidebar";

import { useState, useEffect } from "react";

function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="backdrop-filter backdrop-blur-lg text-white p-4 fixed bottom-0 left-0 w-full z-50 text-center">
        <div className="bg-white p-2">
          Warning: This website is not optimized for mobile devices.
          <button className="bg-blue-700 hover:bg-blue-600 shadow-lg text-white py-2 px-3 rounded-lg">
            It&apos;s fine
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

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
