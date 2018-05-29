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
    return <Text> You sent a date request to {this.props.otherUserName} for {this.state.dates[0].location}, we will let you know when they respond! </Text>;
  }
}
