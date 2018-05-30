import React from "react";
import { Image, View, StyleSheet } from "react-native";

export default class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Image source={require("./img/loading.gif")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 200,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});
