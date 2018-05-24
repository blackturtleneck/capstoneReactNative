import React, { Component } from "react";
import { View, Text } from "react-native";
import Logout from "./Logout";

export default class Profile extends Component {
  render() {
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Profile</Text>
        <Logout />
      </View>
    );
  }
}
