import React, { useEffect, useState } from "react";
import { Page, Block, f7 } from "framework7-react";

const FirstPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    localStorage.getItem("loggedin") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const storedLoggin = localStorage.getItem("loggedin");
      const newIsLoggedIn = storedLoggin === "true";
      setIsLoggedIn(newIsLoggedIn);

      // Navigate based on the new state
      if (newIsLoggedIn) {
        f7.views.main.router.navigate("/home/");
      } else {
        f7.views.main.router.navigate("/getstarted/");
      }
    };

    // Run on component mount to check the current state
    handleStorageChange();

    // Add event listener for storage changes
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
