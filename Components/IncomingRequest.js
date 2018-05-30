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
  import { firestore } from "../FirestoreConfig";


export default class IncomingRequest extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        dates : this.props.dates,
        startTime : this.props.dates[this.props.dates.length-1].startTime,
        timeSelected : null,
        timeStamp : this.props.dates[this.props.dates.length-1].timestampid
        }

        this.confirmDate = this.confirmDate.bind(this)
    }

componentWillReceiveProps(){
   console.log("DATES", this.props.dates)
   console.log("TIME", this.state.timeStamp)

   this.setState({
        dates : this.props.dates,
        startTime : this.props.dates[this.props.dates.length-1].startTime,
        timeSelected : null,
        timeStamp : this.props.dates[this.props.dates.length-1].timestampid
   });
   
}



componentDidMount(){
    console.log("DATES", this.props.dates)
    console.log("TIME", this.props.dates[this.props.dates.length-1].timestampid)
    this.setState({
        dates : this.props.dates,
        startTime : this.props.dates[this.props.dates.length-1].startTime,
        timeSelected : null,
        timeStamp : this.props.dates[this.props.dates.length-1].timestampid
   });
}


timePressed = b => {
    console.log("it me", b)
    console.log("it me again", b.key)
    this.setState({
        timeSelected : b.key
    })
};

confirmDate(){
    console.log("FINAL TIME SELECTED", this.state.timeSelected)

    if (this.state.timeSelected != null ){
        this.setState({
            dateConfirmed : true
        });

        var dateInfo = firestore
        .collection('users')
        .doc(this.props.userEmail)
        .collection('messages')
        .doc(this.props.otherUser)
        .collection('dates').doc(String(this.props.dates[this.props.dates.length-1].timestampid))

        return dateInfo.update({
           confirm: true,
           timeConfirmed : this.state.timeSelected,
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

        var dateInfo2 = firestore
        .collection('users')
        .doc(this.props.otherUser)
        .collection('messages')
        .doc(this.props.userEmail)
        .collection('dates').doc(String(this.props.dates[this.props.dates.length-1].timestampid))
    
        return dateInfo2.update({
           confirm: true,
           timeConfirmed : this.state.timeSelected,
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    

    } 
  
}


  render() {
    let finalDateButton = [{


    }];
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

     let newThing = [];
     for (let i = 1; i < finalDateButton.length; i++) {
         var thingtoAdd = {};

         thingtoAdd.key = finalDateButton[i];
         thingtoAdd.value = finalDateButton[i];
         thingtoAdd.selected = "true";
         newThing.push(thingtoAdd);
     }
     console.log(newThing, "object test")
    

     const renderedButtons = newThing.map(b => {
        return <TouchableOpacity style={styles.timebutton} onPress={() =>this.timePressed(b)}> id={b.value} <Text style={styles.whiteText}> {b.value} </Text> </TouchableOpacity>;
     });

    return(
    <View style= {styles.container}>
            <Text style = {styles.letsdate}> Hey! {"\n"} Want to go to {this.state.dates[0].location}? </Text>
            <View>
            {renderedButtons}

        <View style={{flexDirection : 'row'}}>
            <TouchableOpacity style = {styles.confirmdate} onPress={this.confirmDate}>
            <Text style={styles.purpleText}>Confirm</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.confirmdate}>
            <Text style={styles.purpleText}>Decline</Text>
            </TouchableOpacity>

        </View>

            </View>

    </View>
    
    );
  }
}

const styles = StyleSheet.create({
    timebutton: {
        backgroundColor: '#9ba2ff',
        alignItems : 'center',
        padding: 10,
        width: 150,
        marginLeft: 115,
        borderRadius: 10,
        marginTop: 10
      },
      letsdate: {
        fontSize : 20,
        fontFamily: "Avenir-Light",
        backgroundColor: "#ffffff",
        textAlign: "center"
    },
    container: {
        backgroundColor: "#ffffff",
        paddingBottom: 20
      },
      confirmdate: {
        backgroundColor: '#ededed',
        alignItems : 'center',
        padding: 10,
        width: 150,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 15
      },
      whiteText : {
        color: "#ffffff",
        fontSize: 15,
        fontFamily: "Avenir-Light"
      },
      purpleText : {
        color: "#9ba2ff",
        fontSize: 15,
        fontFamily: "Avenir-Heavy"
    }
});