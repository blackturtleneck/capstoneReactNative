import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";
import Profile from "./Profile";
import UserList from "./UserList";
import Messenger from "./Messenger";
import Login from "./Login";
import Dates from "./Dates";
import DateMap from "./DateMap";

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
    Login: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: " ",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-person" type="ionicon" size={35} color={tintColor} />
        )
      }
    },
    UserList: {
      screen: UserListStack,
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
