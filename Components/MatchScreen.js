import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Logout from "./Logout";

export default class MatchScreen extends Component {
  render() {
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>It's a match!</Text>
        <Button title={"Ok"} onPress={this.props.close} />
      </View>
    );
  }
}
