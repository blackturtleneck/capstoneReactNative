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


export default class ReceiveDate extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        dates : this.props.dates
    }
}

componentWillReceiveProps(){
  console.log("DATES", this.state.dates[this.state.dates.length-1].confirm)
}

componentDidMount(){
  console.log("DATES", this.state.dates)
}

  render() {
    return(
    <View style={styles.container}>
     <Text style={styles.letsdate}> You have an upcoming date at {this.state.dates[this.state.dates.length-1].location} at  {this.state.dates[this.state.dates.length-1].timeConfirmed}!</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
    letsdate: {
      fontSize : 20,
      fontFamily: "Avenir-Light",
      backgroundColor: "#ffffff",
      textAlign: "center"
  },
  container: {
      backgroundColor: "#ffffff"
  }

  });
