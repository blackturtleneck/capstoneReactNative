import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image
  } from "react-native"; 
  import DateMap from './DateMap';
  import SelectMultiple from 'react-native-select-multiple';
  import { firestore } from "../FirestoreConfig";

const sun = ['1800','1900','2000','2100','2200'] ;
const mon = ['m6', 'm7', '   m8', '   m9', '   m10'] ;
const tue = ['    t6', '   t7', '   t8', '   t9', '   t10'] ;
const wed = ['    w6', '   w7', '   w8', '   w9', '   w10'] ;
const thu = ['    th6','   th7','   th8','   th9','   th10'] ;
const fri = ['    f6', '   f7', '   f8', '   f9', '   f10'] ;
const sat = ['    st6','   st7','   st8','   st9','   st10'] ;


export default class Dates extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userEmail : this.props.navigation.state.params.userEmail,
            otherUser : this.props.navigation.state.params.otherUser,
            location : '',
            printText1 : false,
            printText2 : false,
            printText3 : false,
            printText4 : false,
            showMap : false,
            dateNames : true,
            array: [],
            scheduler : false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onButtonPress = (location) => {
        console.log(location)
        this.setState({
            viewSection:true
        })
    }

    renderMoreInformation1 = () => {
        this.setState(prevState =>({
            printText1: !prevState.printText1,
            location: "Fremont Brewery"  
        }));
        console.log(this.state.location, "Loc test")
    }

    renderMoreInformation2 = () => {
        this.setState(prevState =>({
            printText2: !prevState.printText2,
            location: "Schilling Cider"  
        }));
        console.log(this.state.location, "Loc test")
    }

    renderMoreInformation3 = () => {
        this.setState(prevState =>({
            printText3:!prevState.printText3,
            location: "The Backdoor"  
        }));
        console.log(this.state.location, "Loc test")
    }

    renderMoreInformation4 = () => {
        this.setState(prevState =>({
            printText4:!prevState.printText4,
            location: "The Barrel Thief"  
        }));
        console.log(this.state.location, "Loc test")
    }

    _renderMap = () => {
        this.setState(prevState =>({
            showMap : !prevState.showMap
        }));
    }

    nextAvailability = () => {
        this.setState(prevState =>({
            scheduler : true,
            dateNames : false,
            location: prevState.location
        }));
    }

    onSelectionsChange = (selectedFruits) => {
        console.log("selection Test" , selectedFruits)
        this.setState({ selectedFruits })
        this.setState({
            array : selectedFruits
        })
      }
      
    onSubmit(event){
        this.setState({
            submitted : true
        });
       let startTime = [];
       var times = ["1900", "2000"];
       let dayAv = '';
       let start = '';
       var thingtoAdd = {};
       var timeToAdd = {};
       for (var key in times) {
         console.log("KEY", times[key])
                start = times[key].value;
                end = String(parseInt(times[key].value) + 100);

                startTime.dayAv = "wed";
    
                timeToAdd.start = start;
                timeToAdd.end = end;
    
                startTime.times = timeToAdd;
    }

    console.log(this.state.userEmail, "this is me")
    console.log(this.state.otherUser, "this is them")

 
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

    const sentDate = {
      id: time,
      location:  this.state.location,
      sent: true,
      response: false,
      confirm: false,
      startTime: startTime
    };
    const getDate = {
        id: time,
        location: this.state.location,
        sent: false,
        response: false,
        confirm: false,
        startTime : startTime
      };
    firestore
      .collection("users")
      .doc(this.state.userEmail)
      .collection("messages")
      .doc(this.state.otherUser)
      .collection("dates")
      .doc(timeStamp)
      .set(sentDate);
    firestore
      .collection("users")
      .doc(this.state.otherUser)
      .collection("messages")
      .doc(this.state.userEmail)
      .collection("dates")
      .doc(timeStamp)
      .set(getDate); 

    }

  render() {
    return (
        <ScrollView>

        {this.state.dateNames && 
        <View>
    
        <Text style = {styles.meethalfway}> Let's Meet Halfway! </Text>
        <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation1} >
        <View style = {styles.buttonText}>
                 <Text>Fremont Brewery</Text>
        </View>
             <Image style={styles.image} source={require('./img/fremont.png')}/>
                </TouchableOpacity>

                <View>
                {this.state.printText1 && <View> <Text> This kid- and dog-friendly beer hall with bench tables serves up seasonal ales and free pretzels.</Text> <TouchableOpacity  onPress = {this.renderMoreInformation1}> <Text> Select This Spot </Text> </TouchableOpacity> </View>}
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation2}  >
                <Image style={styles.image} source={require('./img/schilling.png')}/>
                    <Text style = {styles.buttonText}>Schilling Cider</Text>
                </TouchableOpacity> 

                <View> 
                {this.state.printText2 && <View> <Text> A great tasting bar with 30+ craft ciders, on tap and in bottles (food can be ordered for delivery).</Text> <TouchableOpacity onPress = {this.renderMoreInformation2}> <Text> Select This Spot </Text> </TouchableOpacity> </View>}
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation3} >
                <Image style={styles.image} source={require('./img/backdoor.png')}/>
                    <Text>The Backdoor</Text>
                </TouchableOpacity>

                <View> 
                {this.state.printText3 && <View> <Text> Speakeasy-style lounge behind Roxy's Diner, for cocktails, small plates and occasional live music.</Text> <TouchableOpacity onPress = {this.renderMoreInformation3}> <Text> Select This Spot </Text> </TouchableOpacity> </View>}
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation4} >
                <Image style={styles.image} source={require('./img/barrelthief.png')}/>
                    <Text>The Barrel Thief</Text>
                </TouchableOpacity>   

               <View>               
                {this.state.printText4 && <View> <Text>Inventive cocktails and small plates in a warm, eco-friendly setting with regular tastings and classes.</Text> <TouchableOpacity onPress = {this.renderMoreInformation4}> <Text> Select This Spot </Text> </TouchableOpacity> </View>}                                
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this._renderMap} >
                    <Text>View on Map</Text>
                </TouchableOpacity>     
            

                <TouchableOpacity style = {styles.button} onPress = {this.nextAvailability}>
                    <Text>Next</Text>
                </TouchableOpacity>   

            </View>  
        }  

        {this.state.scheduler && this.state.submitted != true &&

        <View>

            <Text style = {styles.meethalfway}> Pick some days and times that work for you! </Text>
        <View style={{flexDirection : 'row'}}>

            <Text> {"\n"} 6PM {"\n"}  {"\n"}  {"\n"}  7PM{"\n"}  {"\n"}  {"\n"}8PM {"\n"}  {"\n"}  {"\n"}
             9PM {"\n"}  {"\n"}  {"\n"} 10PM {"\n"}</Text>

            <SelectMultiple style = {styles.scheduler}
                    items={sun}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />

            <SelectMultiple style = {styles.scheduler}
                    items={mon}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />


            <SelectMultiple style = {styles.scheduler}
                    items={tue}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />



            <SelectMultiple style = {styles.scheduler}
                    items={wed}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />


            <SelectMultiple style = {styles.scheduler} 
                    items={thu}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />


            <SelectMultiple style = {styles.scheduler}
                    items={fri}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />


            <SelectMultiple style = {styles.schedulerSat}
                    items={sat}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange} />



        </View>


                <TouchableOpacity style = {styles.button} onPress = {this.onSubmit} >
                    <Text>Send Date Request</Text>
                </TouchableOpacity>   

        </View>

        }
                {this.state.submitted == true && <Text> You've submitted a date request! </Text> }
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    meethalfway: {
        fontSize : 30
    },
    buttonText :{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        flex : 1,
        position: 'absolute',
        alignItems : 'center',
        backgroundColor: 'transparent',
        justifyContent : 'center'

    },
    checkbox: {
        padding: 7
    },
    scheduler: {
        width: 50,
        marginLeft: 4
    },
    schedulerSat:{
        width: 50,
        marginLeft: 4,
        marginRight:4
    },
    image : {
        padding:0,
        height:60
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#DDDDDD",
        height: 60,
        marginTop: 5
      },
      mapbutton: {

      },
      nextbutton: {

      }
});