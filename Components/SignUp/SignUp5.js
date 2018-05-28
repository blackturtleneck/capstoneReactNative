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
      musicPreferences: this.props.fieldValues.musicPreferences
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
        <View>
          <Text>CUISINES I LIKE</Text>
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
              <Text>AMERICAN</Text>
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
              <Text>FRENCH</Text>
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
              <Text>CHINESE</Text>
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
              <Text>DESSERT</Text>
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
              <Text>GREEK</Text>
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
              <Text>HALAL</Text>
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
              <Text>INDIAN</Text>
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
              <Text>ITALIAN</Text>
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
              <Text>JAPANESE</Text>
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
              <Text>KOREAN</Text>
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
              <Text>MEDITERRANEAN</Text>
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
              <Text>MEXICAN</Text>
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
              <Text>MIDDLE EASTERN</Text>
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
              <Text>PIZZA</Text>
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
              <Text>THAI</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text>CUISINES I HATE</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.musicPreferences.american
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.american === null) {
                  this.state.musicPreferences.american = true;
                } else {
                  this.state.musicPreferences.american = !this.state
                    .musicPreferences.american;
                }
                this.forceUpdate();
              }}
            >
              <Text>AMERICAN</Text>
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
              <Text>FRENCH</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.chinese
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.chinese === null) {
                  this.state.musicPreferences.chinese = true;
                } else {
                  this.state.musicPreferences.chinese = !this.state
                    .musicPreferences.chinese;
                }
                this.forceUpdate();
              }}
            >
              <Text>CHINESE</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.musicPreferences.dessert
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.dessert === null) {
                  this.state.musicPreferences.dessert = true;
                } else {
                  this.state.musicPreferences.dessert = !this.state
                    .musicPreferences.dessert;
                }
                this.forceUpdate();
              }}
            >
              <Text>DESSERT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.greek
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.greek === null) {
                  this.state.musicPreferences.greek = true;
                } else {
                  this.state.musicPreferences.greek = !this.state
                    .musicPreferences.greek;
                }
                this.forceUpdate();
              }}
            >
              <Text>GREEK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.halal
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.halal === null) {
                  this.state.musicPreferences.halal = true;
                } else {
                  this.state.musicPreferences.halal = !this.state
                    .musicPreferences.halal;
                }
                this.forceUpdate();
              }}
            >
              <Text>HALAL</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.musicPreferences.indian
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.indian === null) {
                  this.state.musicPreferences.indian = true;
                } else {
                  this.state.musicPreferences.indian = !this.state
                    .musicPreferences.indian;
                }
                this.forceUpdate();
              }}
            >
              <Text>INDIAN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.italian
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.italian === null) {
                  this.state.musicPreferences.italian = true;
                } else {
                  this.state.musicPreferences.italian = !this.state
                    .musicPreferences.italian;
                }
                this.forceUpdate();
              }}
            >
              <Text>ITALIAN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.japanese
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.japanese === null) {
                  this.state.musicPreferences.japanese = true;
                } else {
                  this.state.musicPreferences.japanese = !this.state
                    .musicPreferences.japanese;
                }
                this.forceUpdate();
              }}
            >
              <Text>JAPANESE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.musicPreferences.korean
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.korean === null) {
                  this.state.musicPreferences.korean = true;
                } else {
                  this.state.musicPreferences.korean = !this.state
                    .musicPreferences.korean;
                }
                this.forceUpdate();
              }}
            >
              <Text>KOREAN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.mediterranean
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.mediterranean === null) {
                  this.state.musicPreferences.mediterranean = true;
                } else {
                  this.state.musicPreferences.mediterranean = !this.state
                    .musicPreferences.mediterranean;
                }
                this.forceUpdate();
              }}
            >
              <Text>MEDITERRANEAN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.mexican
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.mexican === null) {
                  this.state.musicPreferences.mexican = true;
                } else {
                  this.state.musicPreferences.mexican = !this.state
                    .musicPreferences.mexican;
                }
                this.forceUpdate();
              }}
            >
              <Text>MEXICAN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={
                this.state.musicPreferences.middleEastern
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.middleEastern === null) {
                  this.state.musicPreferences.middleEastern = true;
                } else {
                  this.state.musicPreferences.middleEastern = !this.state
                    .musicPreferences.middleEastern;
                }
                this.forceUpdate();
              }}
            >
              <Text>MIDDLE EASTERN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.pizza
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.pizza === null) {
                  this.state.musicPreferences.pizza = true;
                } else {
                  this.state.musicPreferences.pizza = !this.state
                    .musicPreferences.pizza;
                }
                this.forceUpdate();
              }}
            >
              <Text>PIZZA</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.musicPreferences.thai
                  ? styles.buttonActive
                  : styles.buttonInactive
              }
              onPress={() => {
                if (this.state.musicPreferences.thai === null) {
                  this.state.musicPreferences.thai = true;
                } else {
                  this.state.musicPreferences.thai = !this.state
                    .musicPreferences.thai;
                }
                this.forceUpdate();
              }}
            >
              <Text>THAI</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text>MUSIC PREFERENCES</Text>
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
              <Text>HIP HOP</Text>
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
              <Text>POP</Text>
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
              <Text>COUNTRY</Text>
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
              <Text>LATIN</Text>
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
              <Text>ALTERNATIVE</Text>
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
              <Text>R&B</Text>
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
              <Text>ROCK</Text>
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
              <Text>EDM</Text>
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
              <Text>CLASSICAL</Text>
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
              <Text>JAZZ</Text>
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
              <Text>indie</Text>
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
              <Text>FOLK</Text>
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
              <Text>REGGAE</Text>
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
              <Text>SOUL</Text>
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
              <Text>PUNK</Text>
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
