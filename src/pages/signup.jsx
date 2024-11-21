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

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("loggedin", true);
    f7.views.main.router.navigate("/home/"); 
  };

  return (
    <Page>
      <p className="tw-text-4xl tw-text-center tw-mb-5 tw-mt-10 tw-font-mono">
        Sign Up
      </p>
      <List strongIos dividersIos insetIos>
        <ListInput
          outline
          label="Username"
          floatingLabel
          type="text"
          placeholder="Choose a username"
          clearButton
          value={username}
          onInput={(e) => setUsername(e.target.value)}
          autofocus
        >
          <Icon material="person" slot="media" />
        </ListInput>
        <ListInput
          outline
          label="Email"
          floatingLabel
          type="email"
          placeholder="Your email address"
          clearButton
          value={email}
          onInput={(e) => setEmail(e.target.value)}
        >
          <Icon material="email" slot="media" />
        </ListInput>
        <ListInput
          outline
          label="Password"
          floatingLabel
          type="password"
          placeholder="Create a password"
          clearButton
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        >
          <Icon material="lock" slot="media" />
        </ListInput>
        <ListItem>
          <Button onClick={handleSignup} fill round className="tw-w-full">
            Sign Up
          </Button>
        </ListItem>
        <ListItem>
          <p className="tw-text-center tw-text-gray-500">
            Already have an account?{" "}
            <a
              href="/login/"
              style={{ color: "var(--f7-md-outline)" }}
            >
              Login
            </a>
          </p>
        </ListItem>
      </List>
    </Page>
  );
};

export default SignupPage;
