import React, { Component } from "react";
import {
  Image,
  View,
  TextInput,
  Text,
  StyleSheet,
  Item,
  Button
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";

export default class SignUp1 extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {
      name: this.props.fieldValues.name,
      gender: this.props.fieldValues.gender,
      birthday: this.props.fieldValues.birthday,
      location: this.props.fieldValues.location,
      education: this.props.fieldValues.education,
      occupation: this.props.fieldValues.occupation,
      religion: this.props.fieldValues.religion
    };
  }
  render() {
    var genderData = ["MALE", "FEMALE"];
    var birthdayData = {
      month: [
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
      day: [
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
      year: [
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
    };
    return (
      <View style={styles.view}>
        <View style={styles.img}>
          <Image source={require("../img/signup-header.png")} />
        </View>
        <Text style={styles.label}>NAME</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <Text style={styles.label}>GENDER</Text>
        <ModalDropdown
          style={styles.textInput}
          options={genderData}
          defaultValue={this.state.gender !== null ? this.state.gender : ""}
          onSelect={value => this.setState({ gender: genderData[value] })}
        />
        <Text style={styles.label}>BIRTHDAY</Text>
        <View style={styles.row}>
          <ModalDropdown
            style={styles.birthday}
            options={birthdayData.month}
            defaultValue={
              this.state.birthday && this.state.birthday.month
                ? this.state.birthday.month
                : ""
            }
            onSelect={value => {
              this.state.birthday
                ? (this.state.birthday = {
                    month: birthdayData.month[value],
                    day: this.state.birthday.day,
                    year: this.state.birthday.year
                  })
                : (this.state.birthday = {
                    month: birthdayData.month[value],
                    day: "",
                    year: ""
                  });
            }}
          />
          <ModalDropdown
            style={styles.birthday}
            options={birthdayData.day}
            defaultValue={
              this.state.birthday && this.state.birthday.day
                ? this.state.birthday.day
                : ""
            }
            onSelect={value => {
              {
                this.state.birthday
                  ? (this.state.birthday = {
                      day: birthdayData.day[value],
                      month: this.state.birthday.month,
                      year: this.state.birthday.year
                    })
                  : (this.state.birthday = {
                      day: birthdayData.day[value],
                      month: "",
                      year: ""
                    });
              }
              this.forceUpdate();
            }}
          />
          <ModalDropdown
            style={styles.birthday}
            options={birthdayData.year}
            defaultValue={
              this.state.birthday && this.state.birthday.year
                ? this.state.birthday.year
                : ""
            }
            onSelect={value => {
              this.state.birthday
                ? (this.state.birthday = {
                    year: birthdayData.year[value],
                    day: this.state.birthday.day,
                    month: this.state.birthday.month
                  })
                : (this.state.birthday = {
                    year: birthdayData.year[value],
                    month: "",
                    year: ""
                  });
            }}
          />
        </View>

        <Text style={styles.label}>EDUCATION</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.education}
          onChangeText={education => this.setState({ education })}
        />
        <Text style={styles.label}>RELIGION</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.religion}
          onChangeText={religion => this.setState({ religion })}
        />
        <Text style={styles.label}>OCCUPATION</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.occupation}
          onChangeText={occupation => this.setState({ occupation })}
        />
        <Text style={styles.label}>LOCATION</Text>
        <TextInput
          style={styles.textInput}
          value={this.state.location}
          onChangeText={location => this.setState({ location })}
        />
        <Button
          color={"#9BA2FF"}
          onPress={this.nextStep.bind(this)}
          title="NEXT"
        />
      </View>
    );
  }
  nextStep(e) {
    // e.preventDefault();
    let data = {
      name: this.state.name,
      gender: this.state.gender,
      occupation: this.state.occupation,
      education: this.state.education,
      religion: this.state.religion,
      location: this.state.location,
      birthday: this.state.birthday
    };
    console.log("data", data);

    this.props.saveValues(data);
    this.props.nextStep();
  }
}
const styles = StyleSheet.create({
  view: {
    marginLeft: 25,
    marginTop: 40
  },
  label: {
    marginTop: 20,
    fontWeight: "bold",
    marginLeft: 5
  },
  textInput: {
    backgroundColor: "#F2F2F2",
    width: 300,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5
  },
  birthday: {
    backgroundColor: "#F2F2F2",
    width: 95,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5
  },
  row: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  img: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});
