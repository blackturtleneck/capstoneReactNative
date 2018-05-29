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
            <FontAwesome>{Icons[dateIconsMap[curDate]]}</FontAwesome>
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
            <FontAwesome>{Icons[topicIconMap[curTopic]]}</FontAwesome>
          );
        }
      }
    }

    return (
      <ScrollView
        style={{
          //   alignContent: "center",
          //   alignItems: "center",
          //   justifyContent: "center",
          //   padding: 50,
          margin: 50
        }}
      >
        <Text>
          {this.props.match.name}, {this.props.match.age}
        </Text>
        <Text>{this.props.match.location}</Text>
        <Image source={{ uri: img1Path }} style={{ width: 300, height: 400 }} />
        <Text>OCCUPATION</Text>
        <Text>{this.props.match.occupation}</Text>
        <Text>EDUCATION</Text>
        <Text>{this.props.match.education}</Text>
        {this.props.match.religion && (
          <View>
            <Text>RELGION</Text>
            <Text>{this.props.match.religion}</Text>
          </View>
        )}
        <Image source={{ uri: img2Path }} style={{ width: 300, height: 400 }} />
        <Text>MY FAVORITE FIRST DATES</Text>
        {userDateIcons}
        <Image source={{ uri: img3Path }} style={{ width: 300, height: 400 }} />
        <Text>MY INTERESTS</Text>
        {userInterests}
        <Image source={{ uri: img4Path }} style={{ width: 300, height: 400 }} />
        <Text>{this.props.match.bio}</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={this.props.rejected}>
            <Text>NOT TODAY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.interested}>
            <Text>INTERESTED</Text>
          </TouchableOpacity>
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
  sports: "futbol",
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
  row: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 10
  }
});
