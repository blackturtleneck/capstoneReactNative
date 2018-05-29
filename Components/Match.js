import React, { Component } from "react";
import { View, Text } from "react-native";
import { firestore } from "../FirestoreConfig";
export default class Match extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    let component = this;
    let cloudUser = {};
    console.log(
      "component.props.screenProps.user.email",
      component.props.screenProps.user.email
    );
    firestore
      .collection("users")
      .where("email", "==", component.props.screenProps.user.email)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          cloudUser = {
            email: doc.id,
            name: doc.get("name"),
            matchGender: doc.get("matchGender"),
            gender: doc.get("gender"),
            matchAgeMax: doc.get("matchAgeMax"),
            matchAgeMin: doc.get("matchAgeMin")
          };
          console.log("clud user", cloudUser);
          component.setState({ user: cloudUser });
        } else {
          console.log("doc does not exist");
        }
      })
      .catch(function(err) {
        console.log("error:", err);
      });

    let matchList = [];
    console.log("component will mount");
    firestore
      .collection("users")
      .where("gender", "==", "FEMALE")
      .where("matchGender", "==", "FEMALE")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log("my email", component.state.user.email);
          console.log(doc.id); //, " => ", doc.data());
          console.log("curcomponent", component.state);
          if (doc.id !== component.state.user.email) {
            console.log("push");
            matchList.push({
              email: doc.id,
              name: doc.get("name"),
              photoURL: doc.get("photoURL")
            });
            console.log("matchList", matchList);
          }
        });
        curComponent.setState({ matches: matchList });
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
