import React, { Component } from "react";
import { View, Text, ListView, FlatList } from "react-native";
import { firestore } from "../FirestoreConfig";
import MatchProfile from "./MatchProfile";
import MatchListController from "./MatchListController";

export default class Match extends Component {
  constructor(props) {
    super(props);
    console.log("this.screenProps", this.screenProps);
    this.state = { user: this.props.screenProps.user, index: 0 };
  }

  interested() {
    console.log("interested");
    // this.setState({ index: this.state.index + 1 });

    // this.setState(prevState => {
    //   return { index: prevState.index + 1 };
    // });
    this.scrollToIndex();
  }

  rejected() {
    console.log("rejected");
    // this.setState({ index: this.state.index + 1 });

    // this.setState(prevState => {
    //   return { index: prevState.index + 1 };
    // });
    this.scrollToIndex();
  }
  getItemLayout = (data, index) => ({
    length: 500,
    offset: 400,
    index
  });

  scrollToIndex = () => {
    this.flatListRef.scrollToIndex({ animated: true, index: this.state.index });
    this.setState(prevState => {
      return { index: prevState.index + 1 };
    });
  };

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
          console.log("doc.id", doc.id);
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
                dates: doc.get("dates"),
                topics: doc.get("topics"),
                age: matchAge,
                location: doc.get("location"),
                photos: doc.get("imgProfile"),
                occupation: doc.get("occupation"),
                education: doc.get("education"),
                religion: doc.get("religion"),
                bio: doc.get("bio")
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
    {
      this.state.matches &&
        (matches = this.state.matches.map(match => (
          <MatchProfile match={match} />
        )));
    }
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FlatList
          scrollEnabled={false}
          ref={ref => {
            this.flatListRef = ref;
          }}
          getItemLayout={this.getItemLayout}
          keyExtractor={item => item}
          initialScrollIndex={0}
          horizontal={true}
          data={this.state.matches}
          renderItem={({ item }) => (
            <MatchProfile
              interested={this.interested.bind(this)}
              rejected={this.rejected.bind(this)}
              match={item}
            />
          )}
        />
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
