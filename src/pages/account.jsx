import React, { useState } from "react";
import {
  Page,
  Block,
  Button,
  BlockTitle,
  List,
  ListItem,
  Toggle,
  f7,
} from "framework7-react";

const AccountPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const openLanguageDialog = () => {
    f7.dialog
      .create({
        title: "Select Language",
        content: `
          <div class="list list-strong-ios list-outline-ios list-dividers-ios">
            <ul>
              <li>
                <label class="item-radio item-radio-icon-end item-content">
                  <input type="radio" name="language" value="English" ${
                    selectedLanguage === "English" ? "checked" : ""
                  } />
                  <i class="icon icon-radio"></i>
                  <div class="item-inner">
                    <div class="item-title">English</div>
                  </div>
                </label>
              </li>
              <li>
                <label class="item-radio item-radio-icon-end item-content">
                  <input type="radio" name="language" value="Hindi" ${
                    selectedLanguage === "Hindi" ? "checked" : ""
                  } />
                  <i class="icon icon-radio"></i>
                  <div class="item-inner">
                    <div class="item-title">Hindi</div>
                  </div>
                </label>
              </li>
            </ul>
          </div>
        `,
        buttons: [
          {
            text: "Cancel",
          },
          {
            text: "OK",
            onClick: (dialog) => {
              const selected = dialog.$el
                .find('input[name="language"]:checked')
                .val();
              setSelectedLanguage(selected);
            },
          },
        ],
      })
      .open();
  };

  return (
    <Page>
      <Block className="display-flex flex-direction-column justify-content-center align-items-center">
        <img
          src="assets/image.jpg"
          alt="profile"
          className="tw-h-24 tw-w-24 tw-rounded-full"
        />
        <p className="tw-mt-3 tw-text-2xl tw-font-sans tw-font-bold">
          Harshit Shukla
        </p>
        <p className="tw-text-sm tw-font-mono tw-text-gray-500">
          hershitshukla35@gmail.com
        </p>
        <Button fill round className="tw-mt-4 tw-w-1/3">
          Edit Profile
        </Button>
      </Block>
      <BlockTitle>Preferences</BlockTitle>
      <List inset strong outline dividers>
        <ListItem title="Push notifications">
          <Toggle slot="after" defaultChecked />
        </ListItem>
        <ListItem title="Dark Mode - β">
          <Toggle slot="after" defaultChecked disabled />
        </ListItem>
        <ListItem
          link="#"
          title="Language"
          after={selectedLanguage}
          onClick={openLanguageDialog}
        />
      </List>

      <BlockTitle>Help & Support</BlockTitle>
      <List inset strong outline dividers>
        <ListItem link="#" title="FAQs" />
        <ListItem link="#" title="Contact Support" />
        <ListItem link="#" title="Submit Feedback" />
      </List>

      <BlockTitle>Follow Us</BlockTitle>
      <List inset strong outline dividers>
        <ListItem link="https://facebook.com" title="Facebook" />
        <ListItem link="https://twitter.com" title="Twitter" />
        <ListItem link="https://instagram.com" title="Instagram" />
      </List>

      <BlockTitle>Security</BlockTitle>
      <List inset strong outline dividers>
        <ListItem link="#" title="Enable Two-Factor Authentication" />
        <ListItem link="/" title="Logout" />
      </List>
    </Page>
  );
};

export default AccountPage;
