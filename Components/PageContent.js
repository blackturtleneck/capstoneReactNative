import React, { Component } from "react";
import { Tabs } from "./router";
import LoadingScreen from "./LoadingScreen";
import { firestore } from "../FirestoreConfig";
import SignUpController from "./SignUp/SignUpController";

export default class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = { componentDidMount: false };
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
            onBoarding: false,
            componentDidMount: true
          });
        } else {
          component.setState({
            componentDidMount: true,

            onBoarding: true,
            matchGender: doc.get("matchGender"),
            gender: doc.get("gender"),
            matchAgeMin: doc.get("matchAgeMin"),
            matchAgeMax: doc.get("matchAgeMax"),
            matchDistance: doc.get("matchDistance"),
            birthday: doc.get("birthday"),
            email: doc.id,
            photos: doc.get("imgProfile"),
            name: doc.get("name"),
            location: doc.get("location")
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
      name: this.state.name,
      location: this.state.location
    };
    if (this.state.componentDidMount) {
      if (!this.state.onBoarding) {
        return (
          <SignUpController
            user={this.props.user}
            signupComplete={this.signupComplete.bind(this)}
          />
        );
      } else {
        return <Tabs screenProps={{ user: user }} />;
      }
    } else {
      return <LoadingScreen />;
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
