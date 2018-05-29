import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity
  } from "react-native"; 


export default class SentAndPendingDate extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        dates : this.props.dates
    }
}

componentWillReceiveProps(){
  console.log("DATES", this.state.dates[0].location)
}

componentDidMount(){
  console.log("DATES", this.state.dates[0].location)
}

  render() {
    return <Text> You have an upcoming date at {this.state.dates[0].location} at {this.props.otherUserName} </Text>;
  }
}
