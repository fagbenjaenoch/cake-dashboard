import { useState, useEffect } from "react";

import Checkbox from "./Checkbox";

function MobileWarning() {
  const [showWarning, setShowWarning] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|ipad|android/.test(userAgent);
    setShowWarning(isMobile);
    const isChecked = localStorage.getItem("isChecked") === "true";
    setChecked(isChecked);
  }, []);

  const handleDismiss = () => {
    setShowWarning(false);
  };

  return (
    <>
      {showWarning && !checked && (
        <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-opacity-50 backdrop-filter backdrop-blur-lg flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[80vw]">
            <h2 className="text-lg font-bold mb-4">Warning</h2>
            <p className="mb-4">
              This website is not optimized for mobile devices. Some features
              may not work as expected.
            </p>
            <button
              onClick={handleDismiss}
              className="bg-red-500 text-white py-2 px-4 rounded-lg"
            >
              Dismiss
            </button>
            <Checkbox label={"Don't remind me again"} />
          </div>
        </div>
      )}
    </>
  );
}

export default MobileWarning;
