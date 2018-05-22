import React from "react";
import { TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import Login from "./Login";
import Messenger from "./Messenger";

export const Tabs = TabNavigator({
  Login: {
    screen: Login
  },
  Messenger: {
    screen: Messenger
  }
});
