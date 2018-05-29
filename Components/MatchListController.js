import React, { Component } from "react";
import { View, Text } from "react-native";
import MatchProfile from "./MatchProfile";
import NoMatches from "./NoMatches";
export default class MatchListController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  showStep() {
    switch (this.state.step) {
      default:
        return <NoMatches />;
    }
  }
  render() {
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{this.props.match.name}</Text>
        <Logout />
      </View>
    );
  }
}
