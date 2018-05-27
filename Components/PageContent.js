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
        if (!doc.data().onBoarding) {
          component.setState({
            onBoarding: false
          });
        } else {
          component.setState({
            onBoarding: true
          });
        }
      });
  }
  render() {
    if (this.state.onBoarding) {
      return <Tabs screenProps={{ user: this.props.user }} />;
    } else {
      return <SignUpController user={this.props.user} />;
    }
  }
}
