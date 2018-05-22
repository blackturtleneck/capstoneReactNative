import React from "react";
import { TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Login from "./Login";
import Messenger from "./Messenger";

// import message from "./img/message-icon.png";
// import profile from "./img/profile-icon.png";

export const Tabs = TabNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: "SIGN IN",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-person" type="ionicon" size={35} color={tintColor} />
      )
    }
  },
  Messenger: {
    screen: Messenger,
    navigationOptions: {
      tabBarLabel: "MESSAGE",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="message-square"
          size={35}
          color={tintColor}
          type="feather"
        />
      )
    }
  }
});
