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
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class SignUp5 extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      foodPreferences: this.props.fieldValues.foodPreferences,
      datePrice: this.props.fieldValues.datePrice,
      neighborhoodPreferences: this.props.fieldValues.neighborhoodPreferences
    };
  }
  render() {
    console.log("signup5 fieldvalues", this.props.fieldValues);
    return (
      <ScrollView style={styles.view}>
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
          <View styles={{ flexDirection: "row", flexWrap: "wrap" }}>
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
        </View>
        <View>
          <Text>DATE PRICE PREFERENCE</Text>
          <View style={{ backgroundColor: "#F2F2F2" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginRight: 50 }}>$ </Text>
              <Text style={{ marginRight: 50 }}>$$ </Text>
              <Text style={{ marginRight: 50 }}>$$$ </Text>
            </View>
            <Slider
              step={1}
              maximumValue={3}
              minimumValue={1}
              value={this.state.datePrice ? this.state.datePrice : 1}
              onValueChange={datePrice => this.setState({ datePrice })}
            />
          </View>
        </View>
        <View>
          <Text>NEIGHBORHOODS I LIKE</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.ballard
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                console.log(
                  "this.state.neighbo",
                  this.state.neighborhoodPreferences
                );
                if (this.state.neighborhoodPreferences.ballard === null) {
                  this.state.neighborhoodPreferences.ballard = true;
                } else {
                  this.state.neighborhoodPreferences.ballard = !this.state
                    .neighborhoodPreferences.ballard;
                }
                this.forceUpdate();
              }}
            >
              <Text>BALLARD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.belltown
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.belltown === null) {
                  this.state.neighborhoodPreferences.belltown = true;
                } else {
                  this.state.neighborhoodPreferences.ballard = !this.state
                    .neighborhoodPreferences.belltown;
                }
                this.forceUpdate();
              }}
            >
              <Text>BELLTOWN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.capitolHill
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.capitolHill === null) {
                  this.state.neighborhoodPreferences.capitolHill = true;
                } else {
                  this.state.neighborhoodPreferences.capitolHill = !this.state
                    .neighborhoodPreferences.capitolHill;
                }
                this.forceUpdate();
              }}
            >
              <Text>CAPITOL HILL</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.downtown
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                console.log(
                  "this.state.neighbo",
                  this.state.neighborhoodPreferences
                );
                if (this.state.neighborhoodPreferences.downtown === null) {
                  this.state.neighborhoodPreferences.downtown = true;
                } else {
                  this.state.neighborhoodPreferences.downtown = !this.state
                    .neighborhoodPreferences.downtown;
                }
                this.forceUpdate();
              }}
            >
              <Text>DOWNTOWN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.eastside
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.eastside === null) {
                  this.state.neighborhoodPreferences.eastside = true;
                } else {
                  this.state.neighborhoodPreferences.eastside = !this.state
                    .neighborhoodPreferences.eastside;
                }
                this.forceUpdate();
              }}
            >
              <Text>EASTSIDE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.firstHill
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.firstHill === null) {
                  this.state.neighborhoodPreferences.firstHill = true;
                } else {
                  this.state.neighborhoodPreferences.firstHill = !this.state
                    .neighborhoodPreferences.firstHill;
                }
                this.forceUpdate();
              }}
            >
              <Text>FIRST HILL</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.fremont
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.fremont === null) {
                  this.state.neighborhoodPreferences.fremont = true;
                } else {
                  this.state.neighborhoodPreferences.fremont = !this.state
                    .neighborhoodPreferences.fremont;
                }
                this.forceUpdate();
              }}
            >
              <Text>FREMONT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.georgetown
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.georgetown === null) {
                  this.state.neighborhoodPreferences.georgetown = true;
                } else {
                  this.state.neighborhoodPreferences.georgetown = !this.state
                    .neighborhoodPreferences.georgetown;
                }
                this.forceUpdate();
              }}
            >
              <Text>GEORGETOWN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.pioneerSquare
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.pioneerSquare === null) {
                  this.state.neighborhoodPreferences.pioneerSquare = true;
                } else {
                  this.state.neighborhoodPreferences.pioneerSquare = !this.state
                    .neighborhoodPreferences.pioneerSquare;
                }
                this.forceUpdate();
              }}
            >
              <Text>PIONEER SQUARE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.queenAnne
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.queenAnne === null) {
                  this.state.neighborhoodPreferences.queenAnne = true;
                } else {
                  this.state.neighborhoodPreferences.queenAnne = !this.state
                    .neighborhoodPreferences.queenAnne;
                }
                this.forceUpdate();
              }}
            >
              <Text>QUEEN ANNE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.sodo
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.sodo === null) {
                  this.state.neighborhoodPreferences.sodo = true;
                } else {
                  this.state.neighborhoodPreferences.sodo = !this.state
                    .neighborhoodPreferences.sodo;
                }
                this.forceUpdate();
              }}
            >
              <Text>SODO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.slu
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.slu === null) {
                  this.state.neighborhoodPreferences.slu = true;
                } else {
                  this.state.neighborhoodPreferences.slu = !this.state
                    .neighborhoodPreferences.slu;
                }
                this.forceUpdate();
              }}
            >
              <Text>SLU</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.uDistrict
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.uDistrict === null) {
                  this.state.neighborhoodPreferences.uDistrict = true;
                } else {
                  this.state.neighborhoodPreferences.uDistrict = !this.state
                    .neighborhoodPreferences.uDistrict;
                }
                this.forceUpdate();
              }}
            >
              <Text>UDISTRICT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.wallingford
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.wallingford === null) {
                  this.state.neighborhoodPreferences.wallingford = true;
                } else {
                  this.state.neighborhoodPreferences.wallingford = !this.state
                    .neighborhoodPreferences.wallingford;
                }
                this.forceUpdate();
              }}
            >
              <Text>WALLINGFORD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.neighborhoodPreferences.westSeattle
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.neighborhoodPreferences.westSeattle === null) {
                  this.state.neighborhoodPreferences.westSeattle = true;
                } else {
                  this.state.neighborhoodPreferences.westSeattle = !this.state
                    .neighborhoodPreferences.westSeattle;
                }
                this.forceUpdate();
              }}
            >
              <Text>WEST SEATTLE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  },
  buttonActive: {
    backgroundColor: "#9BA2FF",
    borderColor: "#9BA2FF",
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    width: 100
  },
  buttonInactive: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    width: 100
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
