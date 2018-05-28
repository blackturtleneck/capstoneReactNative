import React, { Component } from "react";
import { View } from "react-native";
import { firestore } from "../../FirestoreConfig";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
// import SignUp3 from "./SignUp3";
// import SignUpComplete from "./SignUpComplete";

export default class SignUpController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
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
        }
      }
    };
    this.saveValues = this.saveValues.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
  }
  saveValues(fields) {
    console.log("this.state", this.state);
    console.log("fields", fields);
    console.log("filedValiues", this.state.fieldValues);
    this.setState({
      fieldValues: Object.assign({}, this.state.fieldValues, fields)
    });
  }

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
    let userRef = db.collection("users");
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
        matchDistance: fthis.state.ieldValues.matchDistance,

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
      //   case 3:
      //     return (
      //       <SignUp3
      //         submitRegistration={this.submitRegistration}
      //         previousStep={this.previousStep}
      //         saveValues={this.saveValues}
      //         fieldValues={this.state.fieldValues}
      //       />
      //     );

      case 4:
        return <SignUpComplete nextStep={this.nextStep} />;
      case 5:
        return <Redirect to={"/messenger"} />;
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
