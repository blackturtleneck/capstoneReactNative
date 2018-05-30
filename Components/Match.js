import React, { Component } from "react";
import { View, Text, ListView, FlatList } from "react-native";
import { firestore } from "../FirestoreConfig";
import MatchProfile from "./MatchProfile";
import MatchListController from "./MatchListController";
import NoMatches from "./NoMatches";
import MatchScreen from "./MatchScreen";

export default class Match extends Component {
  constructor(props) {
    super(props);
    console.log("this.screenProps", this.screenProps);

    // match states:
    // 0 no match yet
    // 1 match
    // 2 reject
    this.state = {
      user: this.props.screenProps.user,
      index: 0,
      matchesExist: false
    };
  }

  interested(otherUser) {
    console.log("otherUser", otherUser);
    let component = this;
    firestore
      .collection("user")
      .doc(component.state.user.email)
      .collection("matches")
      .doc(otherUser.email)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("doc exists");
          let interested = doc.get("interested");
          if (interested) {
            component.setState({ match: 1 });
          } else {
            component.setState({ match: 2 });
          }
        } else {
          console.log("doc doesn't exist");
          component.setState({ match: 0 });
        }
      });

    if (component.state.match === 1) {
      // set match to be true for you
      firestore
        .collection("user")
        .doc(component.state.user.email)
        .collection("matches")
        .doc(otherUser.email)
        .set({
          match: true
        });
      // set match to be true for them
      firestore
        .collection("user")
        .doc(otherUser.email)
        .collection("matches")
        .doc(component.state.user.email)
        .set({
          match: true
        });

      // add them to your messenger list
      firestore
        .collection("user")
        .doc(this.state.user.email)
        .collection("messages")
        .doc(otherUser.email)
        .collection("messages");
      // add you to their messenger list
      firestore
        .collection("user")
        .doc(otherUser.email)
        .collection("messages")
        .doc(component.state.user.email)
        .collection("messages");
    } else if (component.state.match === 0) {
      firestore
        .collection("users")
        .doc(otherUser.email)
        .collection("matches")
        .doc(component.state.user.email)
        .set({
          swipe: true,
          interest: true
        });
      firestore
        .collection("users")
        .doc(component.state.user.email)
        .collection("matches")
        .doc(otherUser.email)
        .set({
          swipe: true,
          interest: true
        });
    } else {
      firestore
        .collection("users")
        .doc(otherUser.email)
        .collection("matches")
        .doc(component.state.user.email)
        .set({
          swipe: true,
          interest: true,
          match: false
        });
    }

    console.log("interested");
    let curMatches = component.state.matches;
    console.log("matches", curMatches);
    if (curMatches.length > 1) {
      curMatches.splice(0, 1);
      component.setState({ matches: curMatches });
      component.scrollToIndex();
    } else {
      console.log("no");
      component.setState({ matchesExist: false });
    }
    this.setState({ match: -1 });
  }

  rejected() {
    console.log("rejected");
    let curMatches = component.state.matches;
    console.log("matches", curMatches);
    if (curMatches.length > 1) {
      curMatches.splice(0, 1);
      component.setState({ matches: curMatches });
      component.scrollToIndex();
    } else {
      console.log("no");
      this.setState({ matchesExist: false });
    }
  }
  getItemLayout = (data, index) => ({
    length: 500,
    offset: 400 * index,
    index
  });

  scrollToIndex = () => {
    this.flatListRef.scrollToIndex({ animated: true, index: this.state.index });
    this.forceUpdate();

    // this.setState(prevState => {
    //   if (prevState.matches && prevState.matches.length > prevState.index) {
    //     return { index: prevState.index + 1 };
    //   }
    // });
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
        component.setState({ matches: matchList, matchesExist: true });
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
        {this.state.matchesExist ? (
          this.state.match === 1 ? (
            <MatchScreen close={this.close} />
          ) : (
            <FlatList
              scrollEnabled={false}
              ref={ref => {
                this.flatListRef = ref;
              }}
              getItemLayout={this.getItemLayout}
              keyExtractor={item => item}
              // initialScrollIndex={this.state.index}
              initialNumToRender={this.state.index}
              horizontal={true}
              data={this.state.matches ? this.state.matches : []}
              onScrollToIndexFailed={() => {}}
              renderItem={({ item }) => (
                <MatchProfile
                  interested={() => this.interested(item)}
                  rejected={this.rejected.bind(this)}
                  match={item}
                />
              )}
            />
          )
        ) : (
          <NoMatches />
        )}
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
