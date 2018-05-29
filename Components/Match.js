import React, { Component } from "react";
import { View, Text } from "react-native";
import { firestore } from "../FirestoreConfig";

export default class Match extends Component {
  constructor(props) {
    super(props);
    console.log("this.screenProps", this.screenProps);
    this.state = { user: this.props.screenProps.user };
  }

  calculateAge(birthday) {
    console.log("birthday", birthday);
    let birthYear = birthday.year;
    let year = new Date().getFullYear();
    let years = year - birthYear;

    let month = new Date().getMonth();
    if (month < 10) {
      month = 0 + "" + month;
    }
    let birthMonth = months[birthday.month];

    let day = new Date().getDate();
    if (day < 10) {
      day = 0 + "" + day;
    }
    let birthDay = birthday.day;

    if (birthMonth > month) {
      years--;
    } else if (birthMonth === month) {
      if (birthDay > day) {
        years--;
      }
    }
    return years;
  }

  componentDidMount() {
    let component = this;
    let matchList = [];
    console.log("component will mount");
    firestore
      .collection("users")
      .where("gender", "==", this.state.user.matchGender)
      .where("matchGender", "==", this.state.user.gender)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // if not self
          if (doc.id !== component.state.user.email) {
            // check age
            let birthday = doc.get("birthday");
            let matchAge = component.calculateAge(birthday);
            if (
              matchAge <= component.state.user.matchAgeMax &&
              matchAge >= component.state.user.matchAgeMin &&
              doc.get("matchAgeMin") <= component.state.user.age &&
              doc.get("matchAgeMax") >= component.state.user.age
            ) {
              console.log("push");
              matchList.push({
                email: doc.id,
                name: doc.get("name"),
                photoURL: doc.get("photoURL"),
                dates: doc.get("dates")
              });
              console.log("matchList", matchList);
            }
          }
        });
        component.setState({ matches: matchList });
        console.log("matchList", matchList);
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }
  render() {
    console.log("matches =", this.state.matches);
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Match</Text>
      </View>
    );
  }
}

const months = {
  JANUARY: "01",
  FEBRUARY: "02",
  MARCH: "03",
  APRIL: "04",
  MAY: "05",
  JUNE: "06",
  JULY: "07",
  AUGUST: "08",
  SEPTEMBER: "09",
  OCTOBER: "10",
  NOVEMBER: "11",
  DECEMBER: "12"
};
