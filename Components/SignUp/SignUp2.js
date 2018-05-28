import React, { Component } from "react";
import {
  Image,
  View,
  TextInput,
  Text,
  StyleSheet,
  Item,
  Button,
  Slider
} from "react-native";
import DropdownMenu from "react-native-dropdown-menu";

export default class SignUp2 extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      matchGender: this.props.fieldValues.matchGender,
      matchAgeMin: this.props.fieldValues.gender,
      matchAgeMax: this.props.fieldValues.matchAgeMax,
      matchDistance: this.props.fieldValues.matchDistance
    };
  }
  render() {
    var genderData = [["MALE", "FEMALE", "BOTH"]];

    return (
      <View style={styles.view}>
        <Text>TELL US WHO YOU'RE LOOKING FOR</Text>
        <Text style={styles.label}>I'M LOOKING FOR...</Text>
        <DropdownMenu
          style={{ flex: 1, backgroundColor: "#F2F2F2" }}
          bgColor={"#F2F2F2"}
          tintColor={"#666666"}
          activityTintColor={"green"}
          // arrowImg={}
          // checkImage={}
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}}
          // maxHeight={300}
          handler={(selection, row) =>
            this.setState({ birthday: genderData[selection][row] })
          }
          data={genderData}
        >
          <View style={{ flex: 1 }}>
            <Text>{this.state.gender} is the best language in the world</Text>
          </View>
        </DropdownMenu>
        <Text style={styles.label}>AGE</Text>
        <Text style={styles.label}>DISTANCE</Text>

        <Slider />
      </View>
    );
  }

  nextStep(e) {
    // e.preventDefault();
    let data = {
      name: this.state.matchGender,
      gender: this.state.matchAgeMin,
      occupation: this.state.matchAgeMax,
      education: this.state.matchDistance
    };

    this.props.saveValues(data);
    this.props.nextStep();
  }
}
const styles = StyleSheet.create({
  view: {
    // alignContent: "center",
    // alignItems: "center",
    // justifyContent: "center",
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
