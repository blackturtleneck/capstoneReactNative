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
      foodPreferences: this.props.fieldValues.foodPreferences
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
        <View>
          <Text style={styles.foodLabel}>VEGETARIAN</Text>
          <TouchableHighlight
            style={
              this.state.foodPreferences.vegetarian
                ? styles.radioButtonActive
                : styles.radioButtonInactive
            }
            onPress={() => {
              if (this.state.foodPreferences.vegetarian === null) {
                this.state.foodPreferences.vegetarian = true;
              } else {
                this.state.foodPreferences.vegetarian = !this.state
                  .foodPreferences.vegetarian;
              }
              this.forceUpdate();
            }}
          >
            <Text style={styles.foodLabel}>VEGETARIAN</Text>
          </TouchableHighlight>
          <Text style={styles.foodLabel}>GLUTEN FREE</Text>
          <TouchableHighlight
            style={
              this.state.foodPreferences.glutenFree
                ? styles.radioButtonActive
                : styles.radioButtonInactive
            }
            onPress={() => {
              if (this.state.foodPreferences.glutenFree === null) {
                this.state.foodPreferences.glutenFree = true;
              } else {
                this.state.foodPreferences.glutenFree = !this.state
                  .foodPreferences.glutenFree;
              }
              this.forceUpdate();
            }}
          >
            <Text style={styles.foodLabel}>GLUTEN FREE</Text>
          </TouchableHighlight>
          <Text style={styles.foodLabel}>VEGAN</Text>
          <TouchableHighlight
            style={
              this.state.foodPreferences.vegan
                ? styles.radioButtonActive
                : styles.radioButtonInactive
            }
            onPress={() => {
              if (this.state.foodPreferences.vegan === null) {
                this.state.foodPreferences.vegan = true;
              } else {
                this.state.foodPreferences.vegan = !this.state.foodPreferences
                  .vegan;
              }
              this.forceUpdate();
            }}
          >
            <Text style={styles.foodLabel}>VEGAN</Text>
          </TouchableHighlight>
          <Text style={styles.foodLabel}>DAIRY-FREE</Text>
          <TouchableHighlight
            style={
              this.state.foodPreferences.dairyFree
                ? styles.radioButtonActive
                : styles.radioButtonInactive
            }
            onPress={() => {
              if (this.state.foodPreferences.dairyFree === null) {
                this.state.foodPreferences.dairyFree = true;
              } else {
                this.state.foodPreferences.dairyFree = !this.state
                  .foodPreferences.dairyFree;
              }
              this.forceUpdate();
            }}
          >
            <Text style={styles.foodLabel}>dairy free</Text>
          </TouchableHighlight>
          <Text style={styles.foodLabel}>NO RED MEAT</Text>
          <TouchableHighlight
            style={
              this.state.foodPreferences.noRedMeat
                ? styles.radioButtonActive
                : styles.radioButtonInactive
            }
            onPress={() => {
              if (this.state.foodPreferences.noRedMeat === null) {
                this.state.foodPreferences.noRedMeat = true;
              } else {
                this.state.foodPreferences.noRedMeat = !this.state
                  .foodPreferences.noRedMeat;
              }
              this.forceUpdate();
            }}
          >
            <Text style={styles.foodLabel}>NO RED MEAT</Text>
          </TouchableHighlight>
          <Text style={styles.foodLabel}>KOSHER</Text>
          <TouchableHighlight
            style={
              this.state.foodPreferences.kosher
                ? styles.radioButtonActive
                : styles.radioButtonInactive
            }
            onPress={() => {
              if (this.state.foodPreferences.kosher === null) {
                this.state.foodPreferences.kosher = true;
              } else {
                this.state.foodPreferences.kosher = !this.state.foodPreferences
                  .kosher;
              }
              this.forceUpdate();
            }}
          >
            <Text style={styles.foodLabel}>KOSHER</Text>
          </TouchableHighlight>
          <Text style={styles.foodLabel}>PALEO</Text>
          <TouchableHighlight
            style={
              this.state.foodPreferences.paleo
                ? styles.radioButtonActive
                : styles.radioButtonInactive
            }
            onPress={() => {
              if (this.state.foodPreferences.paleo === null) {
                this.state.foodPreferences.paleo = true;
              } else {
                this.state.foodPreferences.paleo = !this.state.foodPreferences
                  .paleo;
              }
              this.forceUpdate();
            }}
          >
            <Text style={styles.foodLabel}>PALEO</Text>
          </TouchableHighlight>
          <Text style={styles.foodLabel}>RAW</Text>
          <TouchableHighlight
            style={
              this.state.foodPreferences.raw
                ? styles.radioButtonActive
                : styles.radioButtonInactive
            }
            onPress={() => {
              if (this.state.foodPreferences.raw === null) {
                this.state.foodPreferences.raw = true;
              } else {
                this.state.foodPreferences.raw = !this.state.foodPreferences
                  .raw;
              }
              this.forceUpdate();
            }}
          >
            <Text style={styles.foodLabel}>RAW</Text>
          </TouchableHighlight>
        </View>
        <View>
          <Text>DATE PRICE PREFERENCE</Text>
          <View style={{ backgroundColor: "#F2F2F2" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ margin: 50 }}>$ </Text>
              <Text style={{ margin: 50 }}>$$ </Text>
              <Text style={{ margin: 50 }}>$$$ </Text>
            </View>
            <Slider step={1} maximumValue={3} minimumValue={1} />
          </View>
        </View>
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
  },
  radioButtonActive: {
    backgroundColor: "black",
    height: 10,
    width: 10,
    borderWidth: 1,
    borderColor: "black",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 10
  },
  radioButtonInactive: {
    backgroundColor: "white",
    height: 10,
    width: 10,
    borderWidth: 1,
    borderColor: "black",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 10
  },
  foodLabel: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 10
  }
});
