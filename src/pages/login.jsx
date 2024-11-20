import React, { useState } from "react";
import {
  Page,
  List,
  ListInput,
  Icon,
  ListItem,
  Button,
  f7,
} from "framework7-react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    f7.views.main.router.navigate("/home/");
  };

  return (
    <Page>
        <p className='tw-text-4xl tw-text-center tw-mb-5 tw-mt-10 tw-font-mono'>Login</p>
      <List strongIos dividersIos insetIos>
        <ListInput
          outline
          label="Username"
          floatingLabel
          type="text"
          placeholder="Username"
          clearButton
          autofocus
        >
          <Icon material="person" slot="media" />
        </ListInput>
        <ListInput
          outline
          label="Password"
          floatingLabel
          type="password"
          placeholder="Your password"
          clearButton
        >
          <Icon material="password" slot="media" />
        </ListInput>
        <ListItem>
          <Button onClick={handleLogin} fill round className="tw-w-full">
            Login
          </Button>
        </ListItem>
        <ListItem>
            <p className='tw-text-center tw-text-gray-500'>Don't have an account? <a href='/signup/' style={{color: "var(--f7-md-outline)"}}>Sign up</a></p>
        </ListItem>
      </List>
    </Page>
  );
};

export default LoginPage;
