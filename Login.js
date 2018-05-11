import React, { Component } from "react";
import { View } from "react-native";
// const FBSDK = require("react-native-fbsdk");
import { LoginButton, AccessToken } from "react-native-fbsdk";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={(error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                alert(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => alert("logout.")}
        />
      </View>
    );
  }
}
