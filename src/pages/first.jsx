import React, { useEffect } from "react";
import {
  Page,
  Block,
  f7,
} from "framework7-react";

const FirstPage = () => {
  useEffect(() => {
    const storedLoggin = localStorage.getItem("loggedin");
    if (storedLoggin === "true") {
      f7.views.main.router.navigate("/home/");
    } else {
      f7.views.main.router.navigate("/getstarted/");
    }
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
