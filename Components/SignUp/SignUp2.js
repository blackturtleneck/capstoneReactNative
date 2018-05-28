import React, { Component } from "react";
import {
  Image,
  View,
  TextInput,
  Text,
  StyleSheet,
  Item,
  Button,
  PanResponder
} from "react-native";
// import Slider from "react-native-slider";
// import Slider from "react-native-multi-slider";
import RangeSlider from "../RangeSlider";
import DropdownMenu from "react-native-dropdown-menu";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

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
        {/* <Slider
          minimumValue={18}
          maximumValue={55}
          step={1}
          value={this.state.matchAge}
          onValueChange={matchAge => this.setState({ matchAge })}
        /> */}
        {/* <Slider /> */}
        <MultiSlider
          values={[21, 26]}
          sliderLength={280}
          onValuesChange={this.multiSliderValuesChange}
          min={18}
          max={55}
          step={1}
          snapped
        />

        <Text>Value: {this.state.matchAge}</Text>

        <Text style={styles.label}>DISTANCE</Text>
        {/* <Slider
          minimumValue={0}
          maximumValue={30}
          step={1}
          value={this.state.matchDistance}
          onValueChange={matchDistance => this.setState({ matchDistance })}
        /> */}

        <Text>Value: {this.state.matchDistance}</Text>
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
