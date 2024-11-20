import React from "react";
import { Page, Block, Button, ListItem, List, Icon } from "framework7-react";
import Material from "./carousal/material";

const LandingPage = () => {
  return (
    <Page className="landing-page">
      <Block strong inset outline>
        <p
          className="tw-text-4xl tw-mb-2 tw-font-cr"
          style={{ color: "var(--f7-md-primary)" }}
        >
          👋 Hi Harshit,
        </p>
        <p
          className="tw-font-mono tw-text-lg"
          style={{ color: "var(--f7-md-on-primary-container)" }}
        >
          Great to see you again!
        </p>
      </Block>

      <p
        className="tw-text-lg tw-font-bold tw-font-mono tw-rounded-full tw-px-4 tw-py-2 tw-ml-4 tw-w-fit tw-mb-3"
        style={{
          backgroundColor: "var(--f7-md-surface-2)",
          color: "var(--f7-md-on-surface-variant)",
        }}
      >
        📚 Popular
      </p>

      <Material />

      <Button
        outline
        round
        className="tw-mx-4 tw-my-4 tw-font-mono"
        href="/quiz/demo/"
      >
        Explore more
      </Button>

      <p
        className="tw-text-lg tw-font-bold tw-font-mono tw-rounded-full tw-px-4 tw-py-2 tw-ml-4 tw-w-fit tw-mt-8"
        style={{
          backgroundColor: "var(--f7-md-surface-2)",
          color: "var(--f7-md-on-surface-variant)",
        }}
      >
        Recent Quizes
      </p>
      <List inset strong dividers className="tw-mt-2">
        <ListItem>
          <p slot="title">TypeScript Advance</p>
          <Button slot="after" tonal round>Play Again</Button>
          <Icon slot="media" material="lightbulb" className="tw-text-fuchsia-400"/>
        </ListItem>
        <ListItem>
          <p slot="title">Angular Basics</p>
          <Button slot="after" tonal round>Play Again</Button>
          <Icon slot="media" material="smart_toy" className="tw-text-blue-400"/>
        </ListItem>
        <ListItem>
          <p slot="title">React Basics</p>
          <Button slot="after" tonal round>Play Again</Button>
          <Icon slot="media" material="games" className="tw-text-red-400" />
        </ListItem>
      </List>
    </Page>
  );
};

export default LandingPage;
