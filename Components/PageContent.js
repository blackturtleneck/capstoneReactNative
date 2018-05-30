import React, { Component } from "react";
import { Tabs } from "./router";
// import SignUp from "./SignUp";
import { firestore } from "../FirestoreConfig";
import SignUpController from "./SignUp/SignUpController";

export default class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let component = this;
    firestore
      .collection("users")
      .doc(this.props.user.email)
      .get()
      .then(function(doc) {
        console.log("doc", doc.data());
        if (!doc.get("onBoarding")) {
          component.setState({
            onBoarding: false
          });
        } else {
          component.setState({
            onBoarding: true,
            matchGender: doc.get("matchGender"),
            gender: doc.get("gender"),
            matchAgeMin: doc.get("matchAgeMin"),
            matchAgeMax: doc.get("matchAgeMax"),
            matchDistance: doc.get("matchDistance"),
            birthday: doc.get("birthday"),
            email: doc.id,
            photos: doc.get("imgProfile"),
            name: doc.get("name")
          });
        }
      });
  }

  signupComplete() {
    console.log("signup completetetete");
    this.setState({
      onBoarding: true
    });
  }
  calculateAge() {
    if (this.state.birthday) {
      let birthYear = this.state.birthday.year;
      let year = new Date().getFullYear();
      let years = year - birthYear;

      let month = new Date().getMonth();
      if (month < 10) {
        month = 0 + "" + month;
      }
      let birthMonth = months[this.state.birthday.month];

      let day = new Date().getDate();
      if (day < 10) {
        day = 0 + "" + day;
      }
      let birthDay = this.state.birthday.day;

      if (birthMonth > month) {
        years--;
      } else if (birthMonth === month) {
        if (birthDay > day) {
          years--;
        }
      }
      return years;
    }
  }
  render() {
    let age = this.calculateAge();
    console.log("calculate age", age);
    console.log("state", this.state);
    let user = {
      age: age,
      matchGender: this.state.matchGender,
      gender: this.state.gender,
      matchAgeMin: this.state.matchAgeMin,
      matchAgeMax: this.state.matchAgeMax,
      matchDistance: this.state.matchDistance,
      email: this.state.email,
      photos: this.state.photos,
      name: this.state.name
    };
    if (this.state.onBoarding) {
      return <Tabs screenProps={{ user: user }} />;
    } else {
      return (
        <SignUpController
          user={this.props.user}
          signupComplete={this.signupComplete.bind(this)}
        />
      );
    }
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
