import React from "react";
import {
  Image,
  View,
  TextInput,
  Text,
  StyleSheet,
  Item,
  Button,
  Slider,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";

export default class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <FontAwesome>{Icons.spinner}</FontAwesome>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 40
  },
  activeButton: {
    color: "#9BA2FF",
    fontSize: 30
  },
  inactiveButton: {
    color: "#C4C4C4",
    fontSize: 30
  },
  row: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 10
  }
});
