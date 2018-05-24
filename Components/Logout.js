import React, { Component } from "react";
import { Button, View, StyleSheet, Image } from "react-native";
import { firestore, auth } from "../FirestoreConfig";
import logo from "./img/ampr-logo.png";

export default class Logout extends Component {
  render() {
    return (
      <Button
        containerStyle={{
          padding: 10,
          width: 150,
          margin: 20,
          borderRadius: 4,
          backgoundColor: "rgb(73,104,173)"
        }}
        style={{ fontSize: 18, color: "white" }}
        onPress={this._logout}
        title="Logout"
      />
    );
  }

  _logout = () => {
    auth.signOut();
  };
}
