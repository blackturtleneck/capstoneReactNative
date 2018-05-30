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
      neighborhoodPreferences: this.props.fieldValues.neighborhoodPreferences,
      cuisinePreferences: this.props.fieldValues.cuisinePreferences,
      cuisineDislikes: this.props.fieldValues.cuisineDislikes,
      musicPreferences: this.props.fieldValues.musicPreferences,bio:
      this.props.fieldValues.bio
    };
  }
  render() {
    console.log("signup5 fieldvalues", this.props.fieldValues);
    return (
      <ScrollView style={styles.view}>
        <View style={styles.row}>
          <TouchableHighlight onPress={this.props.previousStep}>
            <Image source={require("../img/back-arrow.png")} />
          </TouchableHighlight>
          <Text style={styles.header}>TELL US MORE AND GET BETTER DATES</Text>
        </View>
        <Button
          onPress={this.props.submitRegistration}
          title={"SKIP & START DATING"}
          color={"#9BA2FF"}
        />
        <View style={styles.foodPref}>
          <Text style={styles.subheader}>FOOD PREFERENCES / ALLERGIES</Text>
          <View style={styles.row}>
            <Text style={styles.foodLabel}>VEGETARIAN</Text>
            <View style={{ marginLeft: 47 }}>
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
                <Text> </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.foodLabel}>GLUTEN FREE</Text>
            <View style={{ marginLeft: 40 }}>
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
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.foodLabel}>VEGAN</Text>
            <View style={{ marginLeft: 85 }}>
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
                    this.state.foodPreferences.vegan = !this.state
                      .foodPreferences.vegan;
                  }
                  this.forceUpdate();
                }}
              >
                <Text style={styles.foodLabel}>VEGAN</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.foodLabel}>DAIRY-FREE</Text>
            <View style={{ marginLeft: 53 }}>
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
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.foodLabel}>NO RED MEAT</Text>
            <View style={{ marginLeft: 40 }}>
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
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.foodLabel}>KOSHER</Text>
            <View style={{ marginLeft: 77 }}>
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
                    this.state.foodPreferences.kosher = !this.state
                      .foodPreferences.kosher;
                  }
                  this.forceUpdate();
                }}
              >
                <Text style={styles.foodLabel}>KOSHER</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.foodLabel}>PALEO</Text>
            <View style={{ marginLeft: 87 }}>
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
                    this.state.foodPreferences.paleo = !this.state
                      .foodPreferences.paleo;
                  }
                  this.forceUpdate();
                }}
              >
                <Text style={styles.foodLabel}>PALEO</Text>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.foodLabel}>RAW</Text>
            <View style={{ marginLeft: 100 }}>
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
        </View>
        <View style={styles.sliderWrapper}>
          <Text style={styles.subheader}>DATE PRICE PREFERENCE</Text>
          <View style={{ backgroundColor: "#F2F2F2" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ marginLeft: 5, marginRight: 130 }}>$ </Text>
              <Text style={{ marginRight: 120 }}>$$ </Text>
              <Text>$$$ </Text>
            </View>
            <Slider
              style={{ margin: 10, marginBottom: 3, marginTop: 3 }}
              step={1}
              maximumValue={3}
              minimumValue={1}
              value={this.state.datePrice ? this.state.datePrice : 1}
              onValueChange={datePrice => this.setState({ datePrice })}
              minimumTrackTintColor={"#828282"}
              maximumTrackTintColor={"#828282"}
              thumbImage={require("../img/thumbImage.png")}
            />
          </View>
        </View>
        <View style={styles.neighbordhoodWrapper}>
          <Text style={styles.subheader}>NEIGHBORHOODS I LIKE</Text>
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
              <View style={styles.buttonText}>
                <Text>BALLARD</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text>BELLTOWN</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text style={{ fontSize: 12 }}>CAPITOL HILL</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text>DOWNTOWN</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text>EASTSIDE</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text>FIRST HILL</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text>FREMONT</Text>
              </View>
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
              {" "}
              <View style={styles.buttonText}>
                <Text style={{ fontSize: 12 }}>GEORGETOWN</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text>PIONEER SQUARE</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text>QUEEN ANNE</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text>SODO</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text>SLU</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text>UDISTRICT</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text style={{ fontSize: 12 }}>WALLINGFORD</Text>
              </View>
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
              <View style={styles.buttonText}>
                <Text
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  WEST SEATTLE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.neighbordhoodWrapper}>
          <Text style={styles.subheader}>CUISINES I LIKE</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.american
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.american === null) {
                  this.state.cuisinePreferences.american = true;
                } else {
                  this.state.cuisinePreferences.american = !this.state
                    .cuisinePreferences.american;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>AMERICAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.french
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.french === null) {
                  this.state.cuisinePreferences.french = true;
                } else {
                  this.state.cuisinePreferences.french = !this.state
                    .cuisinePreferences.french;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>FRENCH</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.chinese
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.chinese === null) {
                  this.state.cuisinePreferences.chinese = true;
                } else {
                  this.state.cuisinePreferences.chinese = !this.state
                    .cuisinePreferences.chinese;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>CHINESE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.dessert
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.dessert === null) {
                  this.state.cuisinePreferences.dessert = true;
                } else {
                  this.state.cuisinePreferences.dessert = !this.state
                    .cuisinePreferences.dessert;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>DESSERT</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.greek
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.greek === null) {
                  this.state.cuisinePreferences.greek = true;
                } else {
                  this.state.cuisinePreferences.greek = !this.state
                    .cuisinePreferences.greek;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>GREEK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.halal
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.halal === null) {
                  this.state.cuisinePreferences.halal = true;
                } else {
                  this.state.cuisinePreferences.halal = !this.state
                    .cuisinePreferences.halal;
                }
                this.forceUpdate();
              }}
            >
              {" "}
              <View style={styles.buttonText}>
                <Text>HALAL</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.indian
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.indian === null) {
                  this.state.cuisinePreferences.indian = true;
                } else {
                  this.state.cuisinePreferences.indian = !this.state
                    .cuisinePreferences.indian;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>INDIAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.italian
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.italian === null) {
                  this.state.cuisinePreferences.italian = true;
                } else {
                  this.state.cuisinePreferences.italian = !this.state
                    .cuisinePreferences.italian;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>ITALIAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.japanese
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.japanese === null) {
                  this.state.cuisinePreferences.japanese = true;
                } else {
                  this.state.cuisinePreferences.japanese = !this.state
                    .cuisinePreferences.japanese;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>JAPANESE</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.korean
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.korean === null) {
                  this.state.cuisinePreferences.korean = true;
                } else {
                  this.state.cuisinePreferences.korean = !this.state
                    .cuisinePreferences.korean;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>KOREAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.mediterranean
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.mediterranean === null) {
                  this.state.cuisinePreferences.mediterranean = true;
                } else {
                  this.state.cuisinePreferences.mediterranean = !this.state
                    .cuisinePreferences.mediterranean;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text style={{ fontSize: 10 }}>MEDITERRANEAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.mexican
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.mexican === null) {
                  this.state.cuisinePreferences.mexican = true;
                } else {
                  this.state.cuisinePreferences.mexican = !this.state
                    .cuisinePreferences.mexican;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>MEXICAN</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.middleEastern
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.middleEastern === null) {
                  this.state.cuisinePreferences.middleEastern = true;
                } else {
                  this.state.cuisinePreferences.middleEastern = !this.state
                    .cuisinePreferences.middleEastern;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text style={{ textAlign: "center" }}>MIDDLE EASTERN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.pizza
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.pizza === null) {
                  this.state.cuisinePreferences.pizza = true;
                } else {
                  this.state.cuisinePreferences.pizza = !this.state
                    .cuisinePreferences.pizza;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>PIZZA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.thai
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.thai === null) {
                  this.state.cuisinePreferences.thai = true;
                } else {
                  this.state.cuisinePreferences.thai = !this.state
                    .cuisinePreferences.thai;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>THAI</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.neighbordhoodWrapper}>
          <Text style={styles.subheader}>CUISINES I HATE</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.american
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.american === null) {
                  this.state.cuisineDislikes.american = true;
                } else {
                  this.state.cuisineDislikes.american = !this.state
                    .cuisineDislikes.american;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>AMERICAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.french
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.french === null) {
                  this.state.cuisineDislikes.french = true;
                } else {
                  this.state.cuisineDislikes.french = !this.state
                    .cuisineDislikes.french;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>FRENCH</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.chinese
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.chinese === null) {
                  this.state.cuisineDislikes.chinese = true;
                } else {
                  this.state.cuisineDislikes.chinese = !this.state
                    .cuisineDislikes.chinese;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>CHINESE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.dessert
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.dessert === null) {
                  this.state.cuisineDislikes.dessert = true;
                } else {
                  this.state.cuisineDislikes.dessert = !this.state
                    .cuisineDislikes.dessert;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>DESSERT</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.greek
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.greek === null) {
                  this.state.cuisineDislikes.greek = true;
                } else {
                  this.state.cuisineDislikes.greek = !this.state.cuisineDislikes
                    .greek;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>GREEK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.halal
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.halal === null) {
                  this.state.cuisineDislikes.halal = true;
                } else {
                  this.state.cuisineDislikes.halal = !this.state.cuisineDislikes
                    .halal;
                }
                this.forceUpdate();
              }}
            >
              {" "}
              <View style={styles.buttonText}>
                <Text>HALAL</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.indian
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.indian === null) {
                  this.state.cuisineDislikes.indian = true;
                } else {
                  this.state.cuisineDislikes.indian = !this.state
                    .cuisineDislikes.indian;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>INDIAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.italian
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.italian === null) {
                  this.state.cuisineDislikes.italian = true;
                } else {
                  this.state.cuisineDislikes.italian = !this.state
                    .cuisineDislikes.italian;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>ITALIAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.japanese
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.japanese === null) {
                  this.state.cuisineDislikes.japanese = true;
                } else {
                  this.state.cuisineDislikes.japanese = !this.state
                    .cuisineDislikes.japanese;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>JAPANESE</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.korean
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.korean === null) {
                  this.state.cuisineDislikes.korean = true;
                } else {
                  this.state.cuisineDislikes.korean = !this.state
                    .cuisineDislikes.korean;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>KOREAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.mediterranean
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.mediterranean === null) {
                  this.state.cuisineDislikes.mediterranean = true;
                } else {
                  this.state.cuisineDislikes.mediterranean = !this.state
                    .cuisineDislikes.mediterranean;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text style={{ fontSize: 10 }}>MEDITERRANEAN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.mexican
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.mexican === null) {
                  this.state.cuisineDislikes.mexican = true;
                } else {
                  this.state.cuisineDislikes.mexican = !this.state
                    .cuisineDislikes.mexican;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>MEXICAN</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.middleEastern
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.middleEastern === null) {
                  this.state.cuisineDislikes.middleEastern = true;
                } else {
                  this.state.cuisineDislikes.middleEastern = !this.state
                    .cuisineDislikes.middleEastern;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text style={{ textAlign: "center" }}>MIDDLE EASTERN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.pizza
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.pizza === null) {
                  this.state.cuisineDislikes.pizza = true;
                } else {
                  this.state.cuisineDislikes.pizza = !this.state.cuisineDislikes
                    .pizza;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>PIZZA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisineDislikes.thai
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisineDislikes.thai === null) {
                  this.state.cuisineDislikes.thai = true;
                } else {
                  this.state.cuisineDislikes.thai = !this.state.cuisineDislikes
                    .thai;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>THAI</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.neighbordhoodWrapper}>
          <Text style={styles.subheader}>MUSIC PREFERENCES</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.musicPreferences.hiphop
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.hiphop === null) {
                  this.state.musicPreferences.hiphop = true;
                } else {
                  this.state.musicPreferences.hiphop = !this.state
                    .musicPreferences.hiphop;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>HIP HOP</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.cuisinePreferences.pop
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.cuisinePreferences.pop === null) {
                  this.state.cuisinePreferences.pop = true;
                } else {
                  this.state.cuisinePreferences.pop = !this.state
                    .cuisinePreferences.pop;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>POP</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.country
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.country === null) {
                  this.state.musicPreferences.country = true;
                } else {
                  this.state.musicPreferences.country = !this.state
                    .musicPreferences.country;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>COUNTRY</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.musicPreferences.latin
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.latin === null) {
                  this.state.musicPreferences.latin = true;
                } else {
                  this.state.musicPreferences.latin = !this.state
                    .musicPreferences.latin;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>LATIN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.alternative
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.alternative === null) {
                  this.state.musicPreferences.alternative = true;
                } else {
                  this.state.musicPreferences.alternative = !this.state
                    .musicPreferences.alternative;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text style={{ fontSize: 12 }}>ALTERNATIVE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.rb
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.rb === null) {
                  this.state.musicPreferences.rb = true;
                } else {
                  this.state.musicPreferences.rb = !this.state.musicPreferences
                    .rb;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>R&B</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.musicPreferences.rock
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.rock === null) {
                  this.state.musicPreferences.rock = true;
                } else {
                  this.state.musicPreferences.rock = !this.state
                    .musicPreferences.rock;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>ROCK</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.edm
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.edm === null) {
                  this.state.musicPreferences.edm = true;
                } else {
                  this.state.musicPreferences.edm = !this.state.musicPreferences
                    .edm;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>EDM</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.classical
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.classical === null) {
                  this.state.musicPreferences.classical = true;
                } else {
                  this.state.musicPreferences.classical = !this.state
                    .musicPreferences.classical;
                }
                this.forceUpdate();
              }}
            >
              {" "}
              <View style={styles.buttonText}>
                <Text>CLASSICAL</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.musicPreferences.jazz
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.jazz === null) {
                  this.state.musicPreferences.jazz = true;
                } else {
                  this.state.musicPreferences.jazz = !this.state
                    .musicPreferences.jazz;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>JAZZ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.indie
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.indie === null) {
                  this.state.musicPreferences.indie = true;
                } else {
                  this.state.musicPreferences.indie = !this.state
                    .musicPreferences.indie;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>INDIE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.folk
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.folk === null) {
                  this.state.musicPreferences.folk = true;
                } else {
                  this.state.musicPreferences.folk = !this.state
                    .musicPreferences.folk;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>FOLK</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.musicPreferences.reggae
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.reggae === null) {
                  this.state.musicPreferences.reggae = true;
                } else {
                  this.state.musicPreferences.reggae = !this.state
                    .musicPreferences.reggae;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>REGGAE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.soul
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.soul === null) {
                  this.state.musicPreferences.soul = true;
                } else {
                  this.state.musicPreferences.soul = !this.state
                    .musicPreferences.soul;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>SOUL</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.punk
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.punk === null) {
                  this.state.musicPreferences.punk = true;
                } else {
                  this.state.musicPreferences.punk = !this.state
                    .musicPreferences.punk;
                }
                this.forceUpdate();
              }}
            >
              <View style={styles.buttonText}>
                <Text>PUNK</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.neighbordhoodWrapper}>
          <Text style={styles.subheader} value={this.state.bio}>BIO</Text>
          <TextInput multiline={true} style={styles.textInput}         onChangeText={bio => this.setState({ bio })}/>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Button
            color={"#9BA2FF"}
            onPress={this.nextStep.bind(this)}
            title={"FINISH"}
          />
        </View>
      </ScrollView>
    );
  }

  nextStep(e) {
    // e.preventDefault();
    let data = {
      foodPreferences: this.state.foodPreferences,
      datePrice: this.state.datePrice,
      cuisinePreferences: this.state.cuisinePreferences,
      cuisineDislikes: this.state.cuisineDislikes,
      neighborhoodPreferences: this.state.neighborhoodPreferences,
      musicPreferences: this.state.musicPreferences,
      bio: this.state.bio
    };

    this.props.saveValues(data);
    console.log("this.props.fieldvalues", this.props.fieldValues);
    this.props.submitRegistration();
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
    borderColor: "black"
  },
  radioButtonInactive: {
    backgroundColor: "white",
    height: 10,
    width: 10,
    borderWidth: 1,
    borderColor: "black"
  },
  foodLabel: {
    marginRight: 50,
    marginBottom: 10
  },
  buttonActive: {
    backgroundColor: "#9BA2FF",
    borderColor: "#9BA2FF",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width: 100,
    height: 50,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 20
  },
  buttonInactive: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    width: 100,
    height: 50,
    marginRight: 5,
    marginLeft: 5,
    marginTop: 20
  },
  row: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  header: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "bold",
    marginBottom: 5
  },
  subheader: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    marginBottom: 10,
    marginLeft: 5
  },
  foodPref: {
    marginLeft: 50
  },
  sliderWrapper: {
    margin: 20,
    padding: 5,
    borderRadius: 3,
    marginBottom: 10
  },
  buttonText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  neighbordhoodWrapper: {
    margin: 20
  },
  textInput: {
    backgroundColor: "#F2F2F2",
    width: 300,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5
  }
});
