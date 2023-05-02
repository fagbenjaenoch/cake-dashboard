import { useState, useEffect } from "react";

function MobileWarning() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|ipad|android/.test(userAgent);
    setShowWarning(isMobile);
  }, []);

  const handleDismiss = () => {
    setShowWarning(false);
  };

  return (
    <>
      {showWarning && (
        <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-500 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6">
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
          </div>
        </div>
      )}
    </>
  );
}

export default MobileWarning;
