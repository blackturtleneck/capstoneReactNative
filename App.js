/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { View, Text } from "react-native";
import { auth } from "./FirestoreConfig";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import PageContent from "./Components/PageContent";
import LoadingScreen from "./Components/LoadingScreen";

export default class CapstoneReactNative extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.authSubscription = auth.onAuthStateChanged(user => {
      this.setState({
        loading: false,
        user
      });
    });
    console.log("authSub", this.authSubscription);
  }

  componentWillUnmount() {
    console.log("component did unmount");
    this.authSubscription();
  }

  render() {
    console.log("this.state.user", this.state.user);
    // The application is initialising
    if (this.state.loading) return <LoadingScreen />;
    // The user is an Object, so they're logged in
    if (this.state.user) return <PageContent user={this.state.user} />;
    // The user is null, so they're logged out
    return <Login />;
  }
}
