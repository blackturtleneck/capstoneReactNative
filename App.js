/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import { auth } from "./FirestoreConfig";
import { Tabs, PageContentRouter } from "./Components/router";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

export default class CapstoneReactNative extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      user: null
    };
  }

  componentDidMount() {
    console.log("component did mount");
    // check whether user is logged in
    auth
      .onAuthStateChanged(user => {
        console.log("wtf");
        if (user) {
          console.log("user", user);
          this.setState({
            authenticated: true,
            user: {
              displayName: user.displayName,
              email: user.email
            }
          });
        } else {
          console.log("hi");
          this.setState({
            authenticated: true,
            user: null
          });
        }
        console.log("past");
      })
      .bind(this);
    console.log("after");
  }

  render() {
    console.log("state", this.state);
    return (
      <View>
        {// this.state.authenticated ? (
        this.state.user ? (
          <Profile user={this.state.user} />
        ) : (
          <Login />
          // )
          // )
          // : (
          //   <Text>Loading</Text>
        )}
      </View>
    );
  }
}
