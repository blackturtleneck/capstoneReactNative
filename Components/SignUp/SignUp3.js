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
  TouchableOpacity
} from "react-native";
// import Slider from "react-native-slider";
// import Slider from "react-native-multi-slider";
import DropdownMenu from "react-native-dropdown-menu";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

export default class SignUp3 extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      availability: {
        sun: {
          morning: false,
          afternoon: false,
          evening: false
        },
        mon: {
          morning: false,
          afternoon: false,
          evening: false
        },
        tue: {
          morning: false,
          afternoon: false,
          evening: false
        },
        wed: {
          morning: false,
          afternoon: false,
          evening: false
        },
        thu: {
          morning: false,
          afternoon: false,
          evening: false
        },
        fri: {
          morning: false,
          afternoon: false,
          evening: false
        },
        sat: {
          morning: false,
          afternoon: false,
          evening: false
        }
      }
    };
  }
  render() {
    var genderData = [["MALE", "FEMALE", "BOTH"]];

    return (
      <View style={styles.view}>
        <View style={styles.row}>
          <TouchableHighlight onPress={this.props.previousStep}>
            <Image source={require("../img/back-arrow.png")} />
          </TouchableHighlight>
          <Text style={styles.header}>I'M GENERALLY AVAILABLE...</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.firstLabel}>MORNING</Text>
          <Text style={styles.secondLabel}>AFTERNOON</Text>
          <Text style={styles.thirdLabel}>EVENING</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.dayLabel}>SUN</Text>
          <TouchableOpacity
            style={
              this.state.availability.sun.morning
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.sun.morning = !this.state.availability.sun
                .morning;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.sun.afternoon
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.sun.afternoon = !this.state.availability
                .sun.afternoon;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.sun.evening
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.sun.evening = !this.state.availability.sun
                .evening;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.dayLabel}>MON</Text>
          <TouchableOpacity
            style={
              this.state.availability.mon.morning
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.mon.morning = !this.state.availability.mon
                .morning;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.mon.afternoon
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.mon.afternoon = !this.state.availability
                .mon.afternoon;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.mon.evening
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.mon.evening = !this.state.availability.mon
                .evening;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.dayLabel}>TUE</Text>
          <TouchableOpacity
            style={
              this.state.availability.tue.morning
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.tue.morning = !this.state.availability.tue
                .morning;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.tue.afternoon
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.tue.afternoon = !this.state.availability
                .tue.afternoon;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.tue.evening
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.tue.evening = !this.state.availability.tue
                .evening;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.dayLabel}>WED</Text>
          <TouchableOpacity
            style={
              this.state.availability.wed.morning
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.wed.morning = !this.state.availability.wed
                .morning;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.wed.afternoon
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.wed.afternoon = !this.state.availability
                .wed.afternoon;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.wed.evening
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.wed.evening = !this.state.availability.wed
                .evening;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.dayLabel}>THU</Text>
          <TouchableOpacity
            style={
              this.state.availability.thu.morning
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.thu.morning = !this.state.availability.thu
                .morning;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.thu.afternoon
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.thu.afternoon = !this.state.availability
                .thu.afternoon;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.thu.evening
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.thu.evening = !this.state.availability.thu
                .evening;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.dayLabel}>FRI</Text>
          <TouchableOpacity
            style={
              this.state.availability.fri.morning
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.fri.morning = !this.state.availability.fri
                .morning;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.fri.afternoon
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.fri.afternoon = !this.state.availability
                .fri.afternoon;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.fri.evening
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.fri.evening = !this.state.availability.fri
                .evening;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Text style={styles.dayLabel}>SAT</Text>
          <TouchableOpacity
            style={
              this.state.availability.sat.morning
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.sat.morning = !this.state.availability.sat
                .morning;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.sat.afternoon
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.sat.afternoon = !this.state.availability
                .sat.afternoon;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.availability.sat.evening
                ? styles.activeButton
                : styles.inactiveButton
            }
            onPress={() => {
              this.state.availability.sat.evening = !this.state.availability.sat
                .evening;
              this.forceUpdate();
            }}
          >
            <Text> </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.nextButton}>
          <Button
            onPress={this.nextStep.bind(this)}
            title={"NEXT"}
            color={"#9BA2FF"}
          />
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
  activeButton: {
    backgroundColor: "#9BA2FF",
    height: 30,
    width: 60,
    borderRadius: 3,
    margin: 10
  },
  inactiveButton: {
    backgroundColor: "#C4C4C4",
    height: 30,
    width: 60,
    borderRadius: 3,
    margin: 10
  },
  row: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 10
  },
  thirdLabel: {
    marginLeft: 20,
    fontSize: 10
  },
  secondLabel: {
    marginLeft: 30,
    fontSize: 10
  },
  firstLabel: {
    marginLeft: 80,
    fontSize: 10
  },
  header: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 30,
    fontWeight: "bold",
    marginBottom: 50
  },
  dayLabel: {
    fontSize: 10,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 20
  },
  nextButton: {
    marginTop: 200,
    bottom: "10%"
  }
});
