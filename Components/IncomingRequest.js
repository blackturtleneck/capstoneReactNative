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


export default class IncomingRequest extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        dates : this.props.dates,
        startTime : this.props.dates[0].startTime
    }
}

componentWillReceiveProps(){
  console.log("DATES", this.state.dates[0].location)
}

componentDidMount(){
}

  render() {
    var finalDateButton = [{}];
    startTimeArr = this.props.dates[0].startTime;
    startTimeArr.map(function(a) {
        let dayName = '';
        let time = '';
        if(a.day == 'sun') {
            dayName = "Sunday";
        }
        if(a.day == 'mon') {
            dayName = "Monday";
        }
        if(a.day == 'tues') {
            dayName = "Tuesday";
        }
        if(a.day == 'wed') {
            dayName = "Wednesday";
        }
        if(a.day == 'thurs') {
            dayName = "Thursday";
        }
        if(a.day == 'fri') {
            dayName = "Friday";
        }
        if(a.day == 'sat') {
            dayName = "Saturday";
        }
        if(a.day == 'sun') {
            dayName = "Sunday";      
        }

        a.times.forEach(time => {
            console.log(a.times)
            console.log(dayName)
            if (time.start == 1000){
                time = "10AM"
            }
            if (time.start == 1030){
                time = "10:30AM"
            }
            if (time.start == 1100){
                time = "11AM"
            }
            if (time.start == 1130){
                time = "11:30AM"
            }
            if (time.start == 1200){
                time = "12PM"
            }
            if (time.start == 1230){
                time = "12:30PM"
            }
            if (time.start == 1300){
                time = "1PM"
            }
            if (time.start == 1330){
                time = "1:30PM"
            }
            if (time.start == 1400){
                time = "2PM"
            }
            if (time.start == 1430){
                time = "2:30PM"
            }
            if (time.start == 1500){
                time = "3PM"
            }
            if (time.start == 1530){
                time = "3:30PM"
            }
            if (time.start == 1600){
                time = "4PM"
            }
            if (time.start == 1630){
                time = "4:30PM"
            }
            if (time.start == 1700){
                time = "5PM"
            }
            if (time.start == 1730){
                time = "5:30PM"
            }
            if (time.start == 1800){
                time = "6PM"
            }
            if (time.start == 1830){
                time = "6:30PM"
            }
            if (time.start == 1900){
                time = "7PM"
            }
            if (time.start == 1930){
                time = "7:30PM"
            }
            if (time.start == 2000){
                time = "8PM"
            }
            if (time.start == 2030){
                time = "8:30PM"
            }
            if (time.start == 2100){
                time = "9PM"
            }
            if (time.start == 2130){
                time = "9:30PM"
            }
            if (time.start == 2200){
                time = "10PM"
            }
            if (time.start == 2230){
                time = "10:30PM"
            }
            finalDateButton.push(dayName + ", " + time);
        });

     });
     console.log("Date Times", finalDateButton);
    
     const buttons = [
        {
            text: 'button one',
            action: () => console.log('pressed button one')
        },
        {
            text: 'button two',
            action: () => console.log('pressed button two')
        }
     ];

     const renderedButtons = buttons.map(b => {
        return <TouchableOpacity onPress={b.action}> <Text> {b.text} </Text> </TouchableOpacity>;
     });

    return(
    <View>
            <Text> Hey, want to go to {this.state.dates[0].location} at </Text>
            <View>
            {renderedButtons}

            <TouchableOpacity>
            <Text>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text>Another Time</Text>
            </TouchableOpacity>


            </View>

    </View>
    
    );
  }
}
