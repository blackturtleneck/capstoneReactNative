import React, { Component } from "react";
import {
  Image,
  View,
  TextInput,
  Text,
  StyleSheet,
  Item,
  Button,
  Slider,
  TouchableHighlight
} from "react-native";

export default class SignUp5 extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      matchGender: this.props.fieldValues.matchGender,
      matchAge: [18, 25],
      matchDistance: this.props.fieldValues.matchDistance
    };
  }
  render() {
    console.log("signup5 fieldvalues", this.props.fieldValues);
    return (
      <View style={styles.view}>
        <TouchableHighlight onPress={this.props.previousStep}>
          <Image source={require("../img/back-arrow.png")} />
        </TouchableHighlight>
        <Text>TELL US MORE AND GET BETTER DATES</Text>
        <Button
          onPress={this.nextStep.bind(this)}
          title={"SKIP & START DATING"}
        />
        <Text>FOOD PREFERENCES / ALLERGIES</Text>
      </View>
    );
  }

  nextStep(e) {
    // e.preventDefault();
    let data = {
      matchGender: this.state.matchGender,
      matchAge: this.state.matchAge,
      matchDistance: this.state.matchDistance
    };

    this.props.saveValues(data);
    this.props.nextStep();
  }
}
const styles = StyleSheet.create({
  view: {
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
