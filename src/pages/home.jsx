import React, { useState } from "react";
import { Page, Link, Toolbar, Tabs, Tab, Navbar } from "framework7-react";

import Landing from "./landingpage";
import AccountPage from "./account";

const HomePage = () => (
  <Page name="home" pageContent={false}>
    <Toolbar tabbar icons bottom hidden>
      <Link
        tabLink="#home"
        tabLinkActive
        iconMd="material:home"
        iconIos="material:home"
      />
      <Link
        tabLink="#account"
        iconMd="material:person"
        iconIos="material:person"
      />
    </Toolbar>

    <Tabs>
      <Tab id="home" tabActive>
        <Landing />
      </Tab>
      <Tab id="account">
        <AccountPage />
      </Tab>
    </Tabs>
  </Page>
);
export default HomePage;
