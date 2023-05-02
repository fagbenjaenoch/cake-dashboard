import React, { useState, useEffect } from "react";

function MobileWarning() {
  const [isMobile, setIsMobile] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsWarningOpen(true);
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
      <>
        {isWarningOpen && (
          <div className="backdrop-filter backdrop-blur-lg text-black p-4 fixed top-0 left-0 w-full h-screen z-50 text-center">
            <div className="bg-white p-2">
              <p>Warning: This website is not optimized for mobile devices.</p>
              <button
                className="bg-blue-700 hover:bg-blue-600 shadow-lg text-white py-2 px-3 rounded-lg"
                onClick={() => setIsWarningOpen(false)}
              >
                It&apos;s fine
              </button>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return null;
  }
}

export default MobileWarning;
