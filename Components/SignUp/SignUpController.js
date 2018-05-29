import React, { Component } from "react";
import { View } from "react-native";
import { firestore } from "../../FirestoreConfig";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import SignUp4 from "./SignUp4";
import SignUp5 from "./SignUp5";
import SignUpComplete from "./SignUpComplete";

export default class SignUpController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 4,
      fieldValues: {
        name: this.props.user.displayName,
        gender: null, //this.props.user.gender,
        education: null,
        religion: null,
        occupation: null,
        location: null, //this.props.user.location,
        birthday: null, //this.props.user.birthday,

        matchGender: null,
        matchAgeMin: null,
        matchAgeMax: null,
        matchDistance: null,

        availability: {
          sun: {
            morning: null,
            afternoon: null,
            evening: null
          },
          mon: {
            morning: null,
            afternoon: null,
            evening: null
          },
          tue: {
            morning: null,
            afternoon: null,
            evening: null
          },
          wed: {
            morning: null,
            afternoon: null,
            evening: null
          },
          thu: {
            morning: null,
            afternoon: null,
            evening: null
          },
          fri: {
            morning: null,
            afternoon: null,
            evening: null
          },
          sat: {
            morning: null,
            afternoon: null,
            evening: null
          }
        },

        dates: {
          coffee: null,
          dinner: null,
          drinks: null,
          museum: null,
          show: null,
          park: null
        },
        topics: {
          travel: null,
          food: null,
          music: null,
          sports: null,
          movies: null,
          gaming: null,
          nature: null,
          animals: null,
          tech: null
        },

        foodPreferences: {
          vegetarian: null,
          glutenFree: null,
          vegan: null,
          dairyFree: null,
          noRedMeat: null,
          kosher: null,
          paleo: null,
          raw: null
        },
        datePrice: null,
        neighborhoodPreferences: {
          ballard: null,
          belltown: null,
          capitolHill: null,
          downtown: null,
          eastside: null,
          firstHill: null,
          fremont: null,
          georgetown: null,
          pioneerSquare: null,
          queenAnne: null,
          sodo: null,
          slu: null,
          uDistrict: null,
          wallingford: null,
          westSeattle: null
        },
        cuisinePreferences: {
          american: null,
          french: null,
          chinese: null,
          dessert: null,
          greek: null,
          halal: null,
          indian: null,
          italian: null,
          japanese: null,
          korean: null,
          mediterranean: null,
          mexican: null,
          middleEastern: null,
          pizza: null,
          thai: null
        },
        cuisineDislikes: {
          american: null,
          french: null,
          chinese: null,
          dessert: null,
          greek: null,
          halal: null,
          indian: null,
          italian: null,
          japanese: null,
          korean: null,
          mediterranean: null,
          mexican: null,
          middleEastern: null,
          pizza: null,
          thai: null
        },
        musicPreferences: {
          hiphop: null,
          pop: null,
          country: null,
          latin: null,
          edm: null,
          rb: null,
          rock: null,
          alternative: null,
          classical: null,
          jazz: null,
          indie: null,
          folk: null,
          reggae: null,
          soul: null,
          punk: null
        }
      }
    };
    this.saveValues = this.saveValues.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
  }

  saveValues(fields) {
    let component = this;
    let fieldValues = this.state.fieldValues;
    return (function() {
      fieldValues = Object.assign({}, fieldValues, fields);
      component.setState({ fieldValues: fieldValues });
    })();
  }

  // saveValues(fields) {
  //   console.log("save values");
  //   this.setState({
  //     fieldValues: Object.assign({}, this.state.fieldValues, fields)
  //   });
  //   console.log("fieldValues", this.state.fieldValues);
  // }

  nextStep() {
    this.setState(prevState => {
      return { step: prevState.step + 1 };
    });
  }

  previousStep() {
    console.log("prev");
    this.setState(prevState => {
      return { step: prevState.step - 1 };
    });
  }

  submitRegistration() {
    console.log("props", this.props);
    let userRef = firestore.collection("users");
    userRef.doc(this.props.user.email).set(
      {
        name: this.state.fieldValues.name,
        gender: this.state.fieldValues.gender,
        education: this.state.fieldValues.education,
        religion: this.state.fieldValues.religion,
        occupation: this.state.fieldValues.occupation,
        location: this.state.fieldValues.location,
        birthday: this.state.fieldValues.birthday,
        matchGender: this.state.fieldValues.matchGender,
        matchAgeMin: this.state.fieldValues.matchAgeMin,
        matchAgeMax: this.state.fieldValues.matchAgeMax,
        matchDistance: this.state.fieldValues.matchDistance,

        availability: this.state.fieldValues.availability,
        foodPreferences: this.state.fieldValues.foodPreferences,
        cuisineDislikes: this.state.fieldValues.cuisineDislikes,
        cuisinePreferences: this.state.fieldValues.cuisinePreferences,
        datePrice: this.state.fieldValues.datePrice,
        musicPreferences: this.state.fieldValues.musicPreferences,
        dates: this.state.fieldValues.dates,
        topics: this.state.fieldValues.topics,
        onBoarding: true
      },
      { merge: true }
    );
    this.nextStep();
  }

  showStep() {
    switch (this.state.step) {
      default:
        return (
          <SignUp1
            nextStep={this.nextStep}
            saveValues={this.saveValues}
            fieldValues={this.state.fieldValues}
          />
        );
      case 2:
        return (
          <SignUp2
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            saveValues={this.saveValues}
            fieldValues={this.state.fieldValues}
          />
        );
      case 3:
        return (
          <SignUp3
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            saveValues={this.saveValues}
            fieldValues={this.state.fieldValues}
          />
        );
      case 4:
        return (
          <SignUp4
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            saveValues={this.saveValues}
            fieldValues={this.state.fieldValues}
          />
        );
      case 5:
        return (
          <SignUp5
            submitRegistration={this.submitRegistration}
            previousStep={this.previousStep}
            saveValues={this.saveValues}
            fieldValues={this.state.fieldValues}
          />
        );
      case 6:
        return <SignUpComplete signupComplete={this.props.signupComplete} />;
    }
  }
  render() {
    let progress = this.state.step * 33.333;
    return (
      <View>
        {/* //   <div className="signup-wrapper">
    //     <div style={{ width: progress + "vw" }} className="progress-bar">
    //       {" "}
        // </div> */}
        {this.showStep()}
        {/* //   </div> */}
      </View>
    );
  }
}
