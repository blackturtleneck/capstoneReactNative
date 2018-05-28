import React from "react";
import { Image } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import Profile from "./Profile";
import UserList from "./UserList";
import Messenger from "./Messenger";
import Login from "./Login";
import Dates from "./Dates";
import DateMap from "./DateMap";
import Match from "./Match";

export const UserListStack = StackNavigator({
  UserList: {
    screen: UserList,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  },
  Messenger: {
    screen: Messenger,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.otherUser.name} `
    })
  },
  Dates: {
    screen: Dates
  },
  DateMap: {
    screen: DateMap
  }

});

export const Tabs = TabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => (
          <Image size={35} source={require("./img/profile-icon.png")} />
        )
      }
    },
    Match: {
      screen: Match,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: () => (
          <Image source={require("./img/nav-icon.png")} size={35} />
        )
      }
    },
    UserList: {
      screen: UserListStack,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ tintColor }) => (
          <Image source={require("./img/message-icon.png")} size={35} />
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
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "white",
        marginTop: 20
      }
    }
  }
);
