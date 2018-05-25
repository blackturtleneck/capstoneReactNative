import React from "react";
// import "./Messaging.css";
import { View, Text, TextInput, Button } from "react-native";
import List from "react-native-elements";
import { firestore } from "../FirestoreConfig";

export default class Messenger extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log("props", this.props);
    console.log("get params messenger", this.props.navigation.state.params);
    this.state = {
      message: "",
      messages: [],
      user: this.props.navigation.state.params.user.name,
      userEmail: this.props.navigation.state.params.user.email,
      otherUser: this.props.navigation.state.params.otherUser.email,
      otherUserName: this.props.navigation.state.params.otherUser.name
    };

    // this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    console.log("this.state", this.state);
  }

  // componentDidMount() {
  //   //doesnt werk..?
  //   if (document.getElementById("message-list") != null) {
  //     var list = document.getElementById("message-list");
  //     list.scrollTop = list.scrollHeight;
  //     list.animate({ scrollTop: list.scrollHeight });
  //   }
  // }

  componentWillMount() {
    // this.setState({
    //   otherUser: newProps.otherUser
    // });
    // if (newProps.otherUser !== this.state.otherUser) {
    let currentComponent = this;
    firestore
      .collection("users")
      .doc(this.state.userEmail)
      .collection("messages")
      .doc(this.state.otherUser)
      .collection("messages")
      .onSnapshot(function(querySnapshot) {
        var curMessages = [];
        querySnapshot.forEach(function(doc) {
          curMessages.push(doc.data());
          console.log("in curMessages", doc.data());
        });
        currentComponent.setState({ messages: curMessages });
      });
    // }
  }

  // updateMessage(event) {
  //   this.setState({
  //     message: event.target.value
  //   });
  // }

  submitMessage(event) {
    const time = new Date();

    let month = time.getMonth();
    let formattedMonth = "";
    if (month < 10) {
      formattedMonth = "0" + (month + 1);
    } else {
      formattedMonth = month + 1 + "";
    }

    let day = time.getDate();
    let formattedDay = "";
    if (day < 10) {
      formattedDay = "0" + day;
    } else {
      formattedDay = day + "";
    }

    let hours = time.getHours();
    let formattedHours = "";
    if (hours < 10) {
      formattedHours = "0" + hours;
    } else {
      formattedHours = hours + "";
    }

    let minutes = time.getMinutes();
    let formattedMinutes = "";
    if (minutes < 10) {
      formattedMinutes = "0" + minutes;
    } else {
      formattedMinutes = minutes + "";
    }

    let seconds = time.getSeconds();
    let formattedSeconds = "";
    if (seconds < 10) {
      formattedSeconds = "0" + seconds;
    } else {
      formattedSeconds = seconds + "";
    }

    const timeStamp =
      time.getFullYear() +
      ":" +
      formattedMonth +
      ":" +
      formattedDay +
      ":" +
      formattedHours +
      ":" +
      formattedMinutes +
      ":" +
      formattedSeconds +
      ":" +
      time.getMilliseconds();
    const nextMessage = {
      id: time,
      text: this.state.message,
      from: this.state.user
    };
    firestore
      .collection("users")
      .doc(this.state.userEmail)
      .collection("messages")
      .doc(this.state.otherUser)
      .collection("messages")
      .doc(timeStamp)
      .set(nextMessage);
    firestore
      .collection("users")
      .doc(this.state.otherUser)
      .collection("messages")
      .doc(this.state.userEmail)
      .collection("messages")
      .doc(timeStamp)
      .set(nextMessage);

    this.setState({
      message: ""
    });
  }

  render() {
    console.log("this.state.messages", this.state.messages);
    const currentMessage = this.state.messages.map((message, i) => {
      console.log("message", message);
      return (
        <Text
        // className={
        //   this.state.user === message.from
        //     ? "me message-bubble"
        //     : "them message-bubble"
        // }
        // key={message.id}
        >
          {message.text}
        </Text>
      );
    });

    return (
      <View className="messenger-wrapper">
        {/* {this.state.otherUser !== undefined && this.state.otherUser !== null ? (
          <View className="messenger">
            <Text>{this.state.otherUserName}</Text> */}
        <View className="messages" id="message-list">
          {currentMessage}
        </View>

        {/* <View className="button-input-wrapper"> */}
        <TextInput
          id="message-box"
          className="send-text"
          onChangeText={message => this.setState({ message })}
          type="text"
          placeholder="message"
          value={this.state.message}
          onSubmitEditing={this.submitMessage}
        />
        {/* <Button className="submit-button" onPress={this.submitMessage}>
            Send
          </Button>
        </View> */}

        {/* </View>
        // ) : (
        //   <View className="messenger">
        //     <Text className="select">Select a match to start messaging!</Text>
        //   </View>
        // )}  */}
      </View>
    );
  }
}
