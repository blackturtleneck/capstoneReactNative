import React from "react";
// import "./Messaging.css";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native"; 
import List from "react-native-elements";
import { firestore } from "../FirestoreConfig";
import  ReceiveDate  from "./ReceiveDate.js";
import  IncomingRequest  from "./IncomingRequest.js";
import SentAndPendingDate from "./SentAndPendingDate.js";

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


      let currentComponent2 = this;
      firestore
        .collection("users")
        .doc(this.state.userEmail)
        .collection("messages")
        .doc(this.state.otherUser)
        .collection("dates")
        .onSnapshot(function(querySnapshot) {
          var currDates = [];
          querySnapshot.forEach(function(doc) {
            currDates.push(doc.data());
            console.log("in dates", doc.data());
          });

          if (currDates.length != 0){
            currentComponent2.setState({ 
              dates: currDates,
              userSent : currDates[currDates.length-1].sent,
              userConfirmed : currDates[currDates.length-1].confirm,
              userResponded : currDates[currDates.length-1].response
            });

          }
         
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

  onPress = () => {
    console.log("requestDatePress", this.state.userEmail)
    console.log("requestDatePress", this.state.otherUser)
    navigate('Dates', {userEmail : this.state.userEmail})
  }

  render() {
    const {navigate } = this.props.navigation
    console.log("this.state.dates", this.state.dates);
    const currentMessage = this.state.messages.map((message, i) => {
      console.log("message", message);
      return (
        <Text
          style={this.state.user === message.from ? styles.me : styles.them}
          key={message.id}
        >
          {message.text}
        </Text>
      );
    });

    return (
      <View className="messenger-wrapper">

      {this.state.userConfirmed == true && <View> <ReceiveDate dates = {this.state.dates} otherUserName = {this.state.otherUserName} confirm = {this.state.userConfirmed} /> </View>}\      
      {this.state.userSent == false && this.state.userConfirmed == false  && <View> <IncomingRequest dates = {this.state.dates} otherUserName = {this.state.otherUserName} /> </View>}
      {this.state.userSent == true && <View> <SentAndPendingDate dates = {this.state.dates} otherUserName = {this.state.otherUserName} /> </View>}

      {this.state.userSent == true && this.state.userResponded == true && <View>  </View>}

        <ScrollView
          style={{ height: 500, backgroundColor: "white" }}
          scrollEnabled={true}
          ref={ref => (this.scrollView = ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.scrollView.scrollToEnd({ animated: true });
          }}
          className="messages"
          id="message-list"
        >

        
          {currentMessage}

        <TouchableOpacity style = {styles.button} onPress={() => {
          navigate('Dates', {userEmail : this.state.userEmail, otherUser : this.state.otherUser})
  }}  >
            <Text>Request a Date</Text>
        </TouchableOpacity>

        </ScrollView>

        {/* <View className="button-input-wrapper"> */}

        <TextInput
          style={{
            paddingLeft: 10,
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: "white",
            borderTopWidth: 0.5,
            borderTopColor: "black"
          }}
          onChangeText={message => this.setState({ message })}
          type="text"
          placeholder="Say hello and something more..."
          value={this.state.message}
          onSubmitEditing={this.submitMessage}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  them: {
    marginRight: "auto",
    marginLeft: 10,
    backgroundColor: "lightgray",
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 5,
    overflow: "hidden"
  },
  me: {
    backgroundColor: "#9ba2ff",
    marginLeft: "auto",
    marginRight: 10,

    textAlign: "right",
    color: "white",
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#9ba2ff",
    padding: 5,
    overflow: "hidden"
  },
  button: {
    alignItems: 'center',
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
