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

export default class Profile extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      user: this.props.screenProps.user
    };
  }
  render() {
    let img1Path = "";
    let img2Path = "";
    let img3Path = "";
    let img4Path = "";
    {
      this.state.user.photos && (img1Path = this.state.user.photos[0]);
      this.state.user.photos && (img2Path = this.state.user.photos[1]);
      this.state.user.photos && (img3Path = this.state.user.photos[2]);
      this.state.user.photos && (img4Path = this.state.user.photos[3]);
    }
    // Dates
    let userDates = this.state.user.dates;
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
    let userTopics = this.state.user.topics;
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

    let name = this.state.user.name.split(" ")[0].toUpperCase();
    let location = this.state.user.location.toUpperCase();
    return (
      <ScrollView style={styles.view}>
        <View style={styles.center}>
          <Text style={styles.userName}>
            {name}, {this.state.user.age}
          </Text>
          <Text style={styles.subHeader}>{location}</Text>
          <Image source={{ uri: img1Path }} style={styles.img} />
          <Text style={styles.subHeader}>OCCUPATION</Text>
          <Text>{this.state.user.occupation}</Text>
          <Text style={styles.subHeader}>EDUCATION</Text>
          <Text>{this.state.user.education}</Text>
          {this.state.user.religion && (
            <View style={styles.center}>
              <Text style={styles.subHeader}>RELGION</Text>
              <Text>{this.state.user.religion}</Text>
            </View>
          )}
          <Image source={{ uri: img2Path }} style={styles.img} />
          <Text style={styles.subHeader}>MY FAVORITE FIRST DATES</Text>
          <View style={styles.row}>{userDateIcons}</View>
          <Image source={{ uri: img3Path }} style={styles.img} />
          <Text style={styles.subHeader}>MY INTERESTS</Text>
          <View style={styles.row}>{userInterests}</View>
          <Image source={{ uri: img4Path }} style={styles.img} />
          <Text style={styles.bio}>{this.state.user.bio}</Text>

          <TouchableOpacity style={styles.logout}>
            <Logout />
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
    marginLeft: 30,
    marginTop: 5
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

  userName: {
    marginTop: 5,
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
  logout: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#9BA2FF",
    width: 110,
    backgroundColor: "#9BA2FF"
  }
});
