import React, { Component } from "react";
import { View, Text } from "react-native";
import Logout from "./Logout";

export default class NoMatches extends Component {
  render() {
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>You don't have any potential matches. Check back soon!</Text>
      </View>
    );
  }
}
