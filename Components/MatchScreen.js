import React, { Component } from "react";
import { Image, View, Text, Button } from "react-native";
import Logout from "./Logout";

export default class MatchScreen extends Component {
  render() {
    console.log("this.props", this.props);
    let matchImg = this.props.match.photos[0];
    let userImg = this.props.user.photos[0];

    let match = this.props.match.name;
    console.log("match", match);
    let user = this.props.user.name;
    console.log("user", user);

    let matchName = match.split(" ")[0];
    let userName = user.split(" ")[0];

    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>{this.props.user.name}</Text>
        <Image source={{ uri: matchImg }} style={{ height: 50, width: 50 }} />
        <Text>&</Text>
        <Image source={{ uri: userImg }} style={{ height: 50, width: 50 }} />
        <Text>{matchName}</Text>
        <Text>{userName}</Text>

        <Text>It's a match!</Text>
        <Button title={"OK"} onPress={this.props.close} />
      </View>
    );
  }
}
