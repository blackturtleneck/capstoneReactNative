import React, { Component } from "react";
import { Image, View, Text, Button, StyleSheet } from "react-native";
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

    let matchName = match.split(" ")[0].toUpperCase();
    let userName = user.split(" ")[0].toUpperCase();

    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 140
        }}
      >
        <Text style={styles.matchName}>{matchName}</Text>
        <View style={styles.row}>
          <Image source={{ uri: matchImg }} style={styles.img} />
          <Text style={styles.ampr}>&</Text>
          <Image source={{ uri: userImg }} style={styles.img} />
        </View>
        <Text style={styles.matchName}>{userName}</Text>

        <Text style={styles.subHeader}>IT'S A MATCH!</Text>
        <Button color={"#9ba2ff"} title={"OK"} onPress={this.props.close} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  matchName: {
    fontSize: 50,
    fontFamily: "Avenir-Heavy"
  },
  subHeader: {
    fontFamily: "Avenir-Heavy",
    fontSize: 25
  },
  img: {
    borderRadius: 75,
    height: 150,
    width: 150,
    margin: 10
  },
  ampr: {
    color: "#9ba2ff",
    fontFamily: "Avenir-Heavy",
    fontSize: 25,
    paddingTop: 80
  }
});
