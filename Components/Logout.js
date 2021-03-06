import React, { Component } from "react";
import { Button, View, StyleSheet, Image } from "react-native";
import { firestore, auth } from "../FirestoreConfig";
import logo from "./img/ampr-logo.png";

export default class Logout extends Component {
  render() {
    return (
      <Button
        containerStyle={{
          padding: 5,
          width: 150,
          margin: 20,
          borderRadius: 4,
          backgoundColor: "rgb(73,104,173)"
        }}
        color={"white"}
        style={{
          fontSize: 18,
          color: "white",
          fontFamily: "Avenir-Black"
        }}
        onPress={this._logout}
        title="LOG OUT"
      />
    );
  }

  _logout = () => {
    auth.signOut();
  };
}
