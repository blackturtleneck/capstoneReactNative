import React, { Component } from "react";
import { View, Text } from "react-native";

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
        <Text>Messenger</Text>
      </View>
    );
  }
}
