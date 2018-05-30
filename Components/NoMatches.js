import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Logout from "./Logout";

export default class NoMatches extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.message}>
          You don't have any potential matches. Check back soon!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 40,
    padding: 50
  },
  message: {
    fontSize: 20,
    fontFamily: "Avenir-Heavy"
  }
});
