import React, { Component } from "react";
import {
  Image,
  View,
  TextInput,
  Text,
  StyleSheet,
  Picker,
  Item
} from "react-native";
import DropdownMenu from "react-native-dropdown-menu";

export default class SignUp extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      name: this.props.user.displayName,
      gender: "",
      birthday: this.props.user.birthday,
      location: this.props.user.location
    };
  }
  render() {
    var genderData = [["MALE", "FEMALE", "BOTH"]];
    var birthdayData = [
      [
        "",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31"
      ],
      [
        "",
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMEBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMEBER"
      ],
      [
        "",
        "1963",
        "1964",
        "1965",
        "1966",
        "1967",
        "1968",
        "1969",
        "1970",
        "1971",
        "1972",
        "1973",
        "1974",
        "1975",
        "1976",
        "1977",
        "1978",
        "1979",
        "1980",
        "1981",
        "1982",
        "1983",
        "1984",
        "1985",
        "1986",
        "1987",
        "1988",
        "1989",
        "1990",
        "1991",
        "1992",
        "1993",
        "1994",
        "1995",
        "1996",
        "1997",
        "1998",
        "1999",
        "2000"
      ]
    ];
    return (
      <View style={styles.view}>
        <Image source={require("./img/signup-header.png")} />
        <Text style={styles.label}>NAME</Text>
        <TextInput value={this.state.name} />
        <Text style={styles.label}>GENDER</Text>
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

        <Text style={styles.label}>BIRTHDAY</Text>
        <DropdownMenu
          style={{ flex: 1, backgroundColor: "white" }}
          bgColor={"#F2F2F2"}
          tintColor={"#666666"}
          activityTintColor={"green"}
          // arrowImg={}
          // checkImage={}
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}}
          maxHeight={200}
          handler={(selection, row) =>
            this.setState({ birthday: birthdayData[selection][row] })
          }
          data={birthdayData}
        >
          <View style={{ flex: 1 }}>
            <Text>{this.state.birthday} is the best language in the world</Text>
          </View>
        </DropdownMenu>
        <Text style={styles.label}>EDUCATION</Text>
        <TextInput style={styles.textInput} value={this.state.education} />
        <Text style={styles.label}>RELIGION</Text>
        <TextInput style={styles.textInput} value={this.state.religion} />
        <Text style={styles.label}>OCCUPATION</Text>
        <TextInput style={styles.textInput} value={this.state.occupation} />
        <Text style={styles.label}>LOCATION</Text>
        <TextInput style={styles.textInput} value={this.state.location} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
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
