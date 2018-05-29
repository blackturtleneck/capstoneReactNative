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

class CustomMarker extends React.Component {
  render() {
    return (
      <Image source={require("../img/thumbImage.png")} resizeMode="contain" />
    );
  }
}

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
        <View style={styles.row}>
          <TouchableHighlight onPress={this.props.previousStep}>
            <Image source={require("../img/back-arrow.png")} />
          </TouchableHighlight>
          <Text style={styles.header}>TELL US WHO YOU'RE LOOKING FOR</Text>
        </View>
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

        <View style={styles.slider}>
          <Text style={styles.distance}>
            {this.state.matchAgeMin ? this.state.matchAgeMin : 21} -{" "}
            {this.state.matchAgeMax ? this.state.matchAgeMax : 26}
          </Text>
          <MultiSlider
            values={
              this.state.matchAgeMax && this.state.matchAgeMin
                ? [this.state.matchAgeMin, this.state.matchAgeMax]
                : [21, 26]
            }
            sliderLength={270}
            onValuesChange={value =>
              this.setState({
                matchAgeMin: value[0],
                matchAgeMax: value[1]
              })
            }
            customMarker={CustomMarker}
            selectedStyle={{
              backgroundColor: "#828282"
            }}
            unselectedStyle={{
              backgroundColor: "#828282"
            }}
            min={18}
            max={55}
            step={1}
            snapped
          />
        </View>

        <Text style={styles.label}>DISTANCE</Text>
        <View style={styles.slider}>
          <Text>
            {this.state.matchDistance !== null ? this.state.matchDistance : 0}{" "}
            mi
          </Text>
          <Slider
            minimumTrackTintColor={"#828282"}
            maximumTrackTintColor={"#828282"}
            minimumValue={0}
            maximumValue={30}
            thumbImage={require("../img/thumbImage.png")}
            step={1}
            value={this.state.matchDistance}
            onValueChange={matchDistance => this.setState({ matchDistance })}
          />
        </View>
        <View style={styles.nextButton}>
          <Button
            color={"#9BA2FF"}
            onPress={this.nextStep.bind(this)}
            title={"NEXT"}
          />
        </View>
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
    marginTop: 40,
    marginLeft: 25
  },
  label: {
    marginTop: 40
  },
  textInput: {
    backgroundColor: "#F2F2F2",
    width: 300,
    marginTop: 5,
    marginRight: 5,
    padding: 5,
    borderRadius: 5
  },
  row: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  slider: {
    backgroundColor: "#F2F2F2",
    width: 300,
    marginTop: 5,
    padding: 15,
    borderRadius: 5,
    marginBottom: 0
  },
  distance: {
    marginBottom: 20
  },
  header: {
    marginTop: 5,
    marginLeft: 10,
    fontWeight: "bold"
  },
  nextButton: {
    marginTop: 190,
    bottom: "10%"
  }
});
