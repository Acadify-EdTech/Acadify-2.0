import React, { useEffect, useState } from "react";
import { Page, Block, f7 } from "framework7-react";

const FirstPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("loggedin") === "true"
  );

  useEffect(() => {
    const handleNavigation = () => {
      const storedLoggin = localStorage.getItem("loggedin");
      const newIsLoggedIn = storedLoggin === "true";
      setIsLoggedIn(newIsLoggedIn);

      // Splash timeout before navigation
      setTimeout(() => {
        if (newIsLoggedIn) {
          f7.views.main.router.navigate("/home/");
        } else {
          f7.views.main.router.navigate("/getstarted/");
        }
      }, 1000); // 3 seconds splash timeout
    };

    // Run on component mount to check the current state
    handleNavigation();

    // Add event listener for storage changes
    const handleStorageChange = () => handleNavigation();
    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Page>
      <Block className="display-flex flex-direction-column justify-content-center align-content-center tw-h-3/5 item">
        <p className="tw-text-7xl tw-text-center tw-mb-10 tw-font-bold tw-font-mono tw-animate-ping">
          Acadify
        </p>
      </Block>
    </Page>
  );
};

export default FirstPage;
