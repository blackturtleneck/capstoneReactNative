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
import ModalDropdown from "react-native-modal-dropdown";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Modal } from "react-native-router-flux";

export default class SignUp2 extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      matchGender: this.props.fieldValues.matchGender,
      matchAgeMin: this.props.fieldValues.matchAgeMin,
      matchAgeMax: this.props.fieldValues.matchAgeMax,
      matchDistance: this.props.fieldValues.matchDistance
    };
  }
  render() {
    var genderData = ["MALE", "FEMALE", "BOTH"];

    return (
      <View style={styles.view}>
        <TouchableHighlight onPress={this.props.previousStep}>
          <Image source={require("../img/back-arrow.png")} />
        </TouchableHighlight>
        <Text>TELL US WHO YOU'RE LOOKING FOR</Text>
        <Text style={styles.label}>I'M LOOKING FOR...</Text>
        <ModalDropdown
          style={styles.textInput}
          options={genderData}
          defaultValue={
            this.state.matchGender !== null ? this.state.matchGender : ""
          }
          onSelect={value => this.setState({ matchGender: genderData[value] })}
        />
        <Text style={styles.label}>AGE</Text>
        <Text>
          {this.state.matchAgeMin} - {this.state.matchAgeMax}
        </Text>
        <MultiSlider
          values={
            this.state.matchAgeMax && this.state.matchAgeMin
              ? [this.state.matchAgeMin, this.state.matchAgeMax]
              : [21, 26]
          }
          sliderLength={280}
          onValuesChange={value =>
            this.setState({
              matchAgeMin: value[0],
              matchAgeMax: value[1]
            })
          }
          min={18}
          max={55}
          step={1}
          snapped
        />

        <Text style={styles.label}>DISTANCE</Text>
        <Slider
          minimumValue={0}
          maximumValue={30}
          step={1}
          value={this.state.matchDistance}
          onValueChange={matchDistance => this.setState({ matchDistance })}
        />

        <Text>Value: {this.state.matchDistance}</Text>
        <Button onPress={this.nextStep.bind(this)} title={"NEXT"} />
      </View>
    );
  }

  nextStep(e) {
    // e.preventDefault();
    let data = {
      matchGender: this.state.matchGender,
      matchAgeMin: this.state.matchAgeMin,
      matchAgeMax: this.state.matchAgeMax,
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
    backgroundColor: "#F2F2F2",
    width: 100
  }
});
