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

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  const handleLogin = () => {
    if (!username || !password) {
      f7.dialog.alert("Please enter your username and password.");
      return;
    }

    if (username !== storedUsername || password !== storedPassword) {
      f7.dialog.alert("Invalid username or password.");
      return;
    }
    
    localStorage.setItem("loggedin", true);
    f7.views.main.router.navigate("/home/");
  };

  return (
    <Page>
      <p className="tw-text-4xl tw-text-center tw-mb-5 tw-mt-10 tw-font-mono">
        Login
      </p>
      <List strongIos dividersIos insetIos>
        <ListInput
          outline
          label="Username"
          floatingLabel
          type="text"
          placeholder="Username"
          clearButton
          autofocus
          value={username}
          onInput={(e) => setUsername(e.target.value)}
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
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        >
          <Icon material="password" slot="media" />
        </ListInput>
        <ListItem>
          <Button onClick={handleLogin} fill round className="tw-w-full">
            Login
          </Button>
        </ListItem>
        <ListItem>
          <p className="tw-text-center tw-text-gray-500">
            Don't have an account?{" "}
            <a href="/signup/" style={{ color: "var(--f7-md-outline)" }}>
              Sign up
            </a>
          </p>
        </ListItem>
      </List>
    </Page>
  );
};

export default LoginPage;
