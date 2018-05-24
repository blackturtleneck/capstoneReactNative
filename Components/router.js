import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

// import PageContent from "./PageContent";
import Profile from "./Profile";
import UserList from "./UserList";
import Messenger from "./Messenger";
import Login from "./Login";
import { Stack } from "react-native-router-flux";

export const Tabs = TabNavigator(
  {
    Login: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-person" type="ionicon" size={35} color={tintColor} />
        )
      }
    },
    Messenger: {
      screen: UserList,
      navigationOptions: {
        tabBarLabel: " ",
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
  },
  {
    tabBarPosition: "top",
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "#9BA2FF",
        borderTopWidth: 1,
        borderTopColor: "white",
        marginTop: 20
      }
    }
  }
);

export const UserListStack = StackNavigator({
  UserList: {
    screen: UserList
  },
  Messenger: {
    screen: Messenger,
    navigationOptions: {
      title: ({ state }) => `$(state.params.name`
    }
  }
});
