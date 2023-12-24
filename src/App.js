import React, { useState, useEffect } from "react";
import "./App.css";
import Pages from "./components/Pages";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 1000); // Adjust the threshold as needed
    };

    // Initial check
    checkWindowSize();

    // Listen for window resize events
    window.addEventListener("resize", checkWindowSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-tablet">
        <img src={"../images/logo.png"} alt="Headout" />
        <p>
          Currently, we're not supporting Mobile & Tablets{" "}
          <span role="img" aria-label="Warn">
            🙏
          </span>
        </p>
      </div>
    );
  } else {
    return <Pages />;
  }
}

export default App;
