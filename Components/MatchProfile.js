import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Logout from "./Logout";
import FontAwesome, { Icons } from "react-native-fontawesome";

export default class MatchProfile extends Component {
  render() {
    let img1Path = "";
    let img2Path = "";
    let img3Path = "";
    let img4Path = "";
    {
      this.props.match.photos && (img1Path = this.props.match.photos[0]);
      this.props.match.photos && (img2Path = this.props.match.photos[1]);
      this.props.match.photos && (img3Path = this.props.match.photos[2]);
      this.props.match.photos && (img4Path = this.props.match.photos[3]);
    }
    // Dates
    let userDates = this.props.match.dates;
    let userDateIcons = [];
    if (userDates) {
      for (let i = 0; i < dates.length; i++) {
        let curDate = dates[i];
        if (userDates[curDate] !== null && userDates[curDate] !== false) {
          userDateIcons.push(
            <FontAwesome style={styles.icon}>
              {Icons[dateIconsMap[curDate]]}
            </FontAwesome>
          );
        }
      }
    }

    // Topics
    let userTopics = this.props.match.topics;
    let userInterests = [];
    if (userTopics) {
      for (let i = 0; i < topics.length; i++) {
        let curTopic = topics[i];
        if (userTopics[curTopic] !== null && userTopics[curTopic] !== false) {
          userInterests.push(
            <FontAwesome style={styles.icon}>
              {Icons[topicIconMap[curTopic]]}
            </FontAwesome>
          );
        }
      }
    }

    let name = this.props.match.name.split(" ")[0].toUpperCase();
    let location = this.props.match.location.toUpperCase();
    return (
      <ScrollView style={styles.view}>
        <View style={styles.center}>
          <Text style={styles.matchName}>
            {name}, {this.props.match.age}
          </Text>
          <Text style={styles.subHeader}>{location}</Text>
          <Image source={{ uri: img1Path }} style={styles.img} />
          <Text style={styles.subHeader}>OCCUPATION</Text>
          <Text>{this.props.match.occupation}</Text>
          <Text style={styles.subHeader}>EDUCATION</Text>
          <Text>{this.props.match.education}</Text>
          {this.props.match.religion && (
            <View style={styles.center}>
              <Text style={styles.subHeader}>RELGION</Text>
              <Text>{this.props.match.religion}</Text>
            </View>
          )}
          <Image source={{ uri: img2Path }} style={styles.img} />
          <Text style={styles.subHeader}>MY FAVORITE FIRST DATES</Text>
          <View style={styles.row}>{userDateIcons}</View>
          <Image source={{ uri: img3Path }} style={styles.img} />
          <Text style={styles.subHeader}>MY INTERESTS</Text>
          <View style={styles.row}>{userInterests}</View>
          <Image source={{ uri: img4Path }} style={styles.img} />
          <Text style={styles.bio}>{this.props.match.bio}</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.reject}
              onPress={this.props.rejected}
            >
              <Text style={styles.rejectText}>NOT TODAY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.interested}
              onPress={this.props.interested}
            >
              <Text style={styles.interestedText}>INTERESTED</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const topicIconMap = {
  animals: "paw",
  food: "cutlery",
  gaming: "gamepad",
  movies: "cinema",
  music: "music",
  nature: "tree",
  sports: "futbolO",
  tech: "mobile",
  travel: "plane"
};

const topics = [
  "animals",
  "food",
  "gaming",
  "movies",
  "music",
  "nature",
  "sports",
  "tech",
  "travel"
];

const dates = ["coffee", "dinner", "drinks", "museum", "park", "show"];

const dateIconsMap = {
  coffee: "coffee",
  dinner: "cutlery",
  drinks: "glass",
  museum: "university",
  park: "tree",
  show: "ticket"
};
const styles = StyleSheet.create({
  view: {
    margin: 30,
    marginLeft: 30
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row"
  },

  matchName: {
    fontSize: 30,
    fontFamily: "Avenir-Heavy"
  },
  subHeader: {
    fontFamily: "Avenir",
    fontSize: 15,
    color: "#828282",
    marginBottom: 5,
    marginTop: 10
  },
  img: {
    width: 300,
    height: 400,
    marginTop: 10,
    marginBottom: 10
  },
  icon: {
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10
  },
  bio: {
    marginTop: 5,
    marginBottom: 15
  },
  reject: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#333333",
    width: 100,
    margin: 20
  },
  rejectText: {
    fontFamily: "Avenir-Black",
    fontSize: 12,
    color: "#333333"
  },
  interested: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#9BA2FF",
    width: 110,
    margin: 20,
    backgroundColor: "#9BA2FF"
  },
  interestedText: {
    fontFamily: "Avenir-Black",
    fontSize: 12,
    color: "#4F4F4F"
  }
});
