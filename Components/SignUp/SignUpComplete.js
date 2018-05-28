import React, { Component } from "react";
import {
  Image,
  View,
  TextInput,
  Text,
  StyleSheet,
  Item,
  Button
} from "react-native";

export default class SignUpComplete extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text>REGISTRATION COMPLETE!</Text>

        <Text>TIME TO START MATCHING</Text>
        <Button title={"OK"} onPress={this.props.nextStep} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  label: {
    marginTop: 40,
    fontWeight: "bold"
  },
  textInput: {
    backgroundColor: "#F2F2F2"
  }
});
