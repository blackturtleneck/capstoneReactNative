import React, { Component } from "react";
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image,
    TouchableHighlight
  } from "react-native"; 
  import DateMap from './DateMap';
  import SelectMultiple from 'react-native-select-multiple';
  import { firestore } from "../FirestoreConfig";

const sun = ['1','2','3','4','5'] ;
const mon = ['6', '7', '8', '9', '10'] ;
const tue = ['11', '12', '13', '14', '15'] ;
const wed = ['16', '17', '18', '19', '20'] ;
const thu = ['21','22','23','24','25'] ;
const fri = ['26', '27', '28', '29', '30'] ;
const sat = ['31','32','33','34','35'] ;


const renderLabel = (label, style) => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginLeft:10}}>
            <Text style={styles.whiteText}> {label} </Text>
        </View>
        </View>
    )
}


export default class Dates extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userEmail : this.props.navigation.state.params.userEmail,
            otherUser : this.props.navigation.state.params.otherUser,
            otherUserName : this.props.navigation.state.params.otherUserName,
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
        let times = this.state.array;
        console.log(this.state.array, "ARRAY TEST!")
        this.setState({
            submitted : true
        });


        let arrayTimes = [];
        for(let i = 0; i <= times.length; i++){
            let key = times[i]

            for (var j in key) {
                arrayTimes.push(key[j]);
            }
        }
        console.log("ONE ARRAY", arrayTimes)
        arrayTimes = arrayTimes.filter(function(item, index,inputArray){
                return inputArray.indexOf(item) == index;
        });
        
        const obj = [];

        for (let i=0; i < arrayTimes.length; i++){
            let day = '';
            let start = '';
            let end = '';

            if(arrayTimes[i] <= 5){
                day = "sun";
                if(arrayTimes[i] == 1){
                    start = 1800
                }
                if(arrayTimes[i] == 2){
                    start = 1900                
                }
                if(arrayTimes[i] == 3){
                    start = 2000                
                }
                if(arrayTimes[i] == 4){
                    start = 2100                   
                }
                if(arrayTimes[i] == 5){
                    start = 2200   
                }
                end = start + 100
            } else if (arrayTimes[i] <= 10) {
                day = "mon"
                if(arrayTimes[i] == 6){
                    start = 1800
                }
                if(arrayTimes[i] == 7){
                    start = 1900                
                }
                if(arrayTimes[i] == 8){
                    start = 2000              
                }
                if(arrayTimes[i] == 9){
                    start = 2100                  
                }
                if(arrayTimes[i] == 10){
                    start = 2200   
                }
                end = start + 100

            } else if (arrayTimes[i] <= 15) {
                day = "tues"
                if(arrayTimes[i] == 11){
                    start = 1800
                }
                if(arrayTimes[i] == 12){
                    start = 1900                 
                }
                if(arrayTimes[i] == 13){
                    start = 2000                
                }
                if(arrayTimes[i] == 14){
                    start = 2100                  
                }
                if(arrayTimes[i] == 15){
                    start = 2200  
                }
                end = start + 100
            } else if (arrayTimes[i] <= 20){
                day = "wed"
                if(arrayTimes[i] == 16){
                    start = 1800
                }
                if(arrayTimes[i] == 17){
                    start = 1900                 
                }
                if(arrayTimes[i] == 18){
                    start = 2000                
                }
                if(arrayTimes[i] == 19){
                    start = 2100                   
                }
                if(arrayTimes[i] == 20){
                    start = 2200   
                }
                end = start + 100
            } else if (arrayTimes[i] <= 25){
                day = "thurs"
                if(arrayTimes[i] == 21){
                    start = 1800
                }
                if(arrayTimes[i] == 22){
                    start = 1900                 
                }
                if(arrayTimes[i] == 23){
                    start = 2000               
                }
                if(arrayTimes[i] == 24){
                    start = 2100                  
                }
                if(arrayTimes[i] == 25){
                    start = 2200   
                }
                end = start + 100
            } else if (arrayTimes[i] <= 30){
                day = "fri"
                if(arrayTimes[i] == 26){
                    start = 1800
                }
                if(arrayTimes[i] == 27){
                    start = 1900                 
                }
                if(arrayTimes[i] == 28){
                    start = 2000                
                }
                if(arrayTimes[i] == 29){
                    start = 2100                   
                }
                if(arrayTimes[i] == 30){
                    start = 2200   
                }
                end = start + 100
            } else {
                day = "sat"
                if(arrayTimes[i] == 31){
                    start = 1800
                }
                if(arrayTimes[i] == 32){
                    start = 1900                
                }
                if(arrayTimes[i] == 33){
                    start = 2000                
                }
                if(arrayTimes[i] == 34){
                    start = 2100                   
                }
                if(arrayTimes[i] == 35){
                    start = 2200   
                }
                end = start + 100
            }
            obj.push({
                "day" : day,
                "times" : [{"start" : start, "end" : end}]
            })
        }
        console.log("object", obj)

    const finalTimeArray = obj;

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
      timestampid: timeStamp,
      location:  this.state.location,
      sent: true,
      response: false,
      confirm: false,
      startTime: finalTimeArray
    };
    const getDate = {
        id: time,
        timestampid: timeStamp,
        location: this.state.location,
        sent: false,
        response: false,
        confirm: false,
        startTime : finalTimeArray
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
        <ScrollView style={styles.container}>

        {this.state.dateNames && 
        <View>
    
        <Text style = {styles.meethalfway}> Let's Meet Halfway! </Text>
        <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation1} >
        <View style = {styles.buttonText}>
                 <Text></Text>
        </View>
             <Image style={styles.image} source={require('./img/fremont.png')}/>
                </TouchableOpacity>

                <View>
                {this.state.printText1 && <View> <Text> This kid- and dog-friendly beer hall with bench tables serves up seasonal ales and free pretzels.</Text> <TouchableOpacity style = {styles.nextbutton}  onPress = {this.renderMoreInformation1}> <Text style = {styles.whiteText}> SELECT THIS SPOT </Text> </TouchableOpacity> </View>}
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation2}  >
                <Image style={styles.image} source={require('./img/schilling.png')}/>
                    <Text style = {styles.buttonText}></Text>
                </TouchableOpacity> 

                <View> 
                {this.state.printText2 && <View> <Text> A great tasting bar with 30+ craft ciders, on tap and in bottles (food can be ordered for delivery).</Text> <TouchableOpacity style = {styles.nextbutton}  onPress = {this.renderMoreInformation2}> <Text style = {styles.whiteText}> SELECT THIS SPOT </Text> </TouchableOpacity> </View>}
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation3} >
                <Image style={styles.image} source={require('./img/backdoor.png')}/>
                    <Text></Text>
                </TouchableOpacity>

                <View> 
                {this.state.printText3 && <View> <Text> Speakeasy-style lounge behind Roxy's Diner, for cocktails, small plates and occasional live music.</Text> <TouchableOpacity style = {styles.nextbutton}  onPress = {this.renderMoreInformation3}> <Text style = {styles.whiteText} > SELECT THIS SPOT </Text> </TouchableOpacity> </View>}
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation4} >
                <Image style={styles.image} source={require('./img/barrelthief.png')}/>
                    <Text></Text>
                </TouchableOpacity>   

               <View>               
                {this.state.printText4 && <View> <Text>Inventive cocktails and small plates in a warm, eco-friendly setting with regular tastings and classes.</Text> <TouchableOpacity style = {styles.nextbutton}  onPress = {this.renderMoreInformation4}> <Text style = {styles.whiteText}> SELECT THIS SPOT </Text> </TouchableOpacity> </View>}                                
                </View>   

                <TouchableOpacity style = {styles.mapbutton} onPress = {this._renderMap} >
                    <Text style={styles.purpleText}>VIEW ON MAP</Text>
                </TouchableOpacity>  

                
                <View> 
                {this.state.showMap && <View>  <Image source={require('./img/map.png')}/> </View>}
                </View>      
            
            <View styles={styles.container}>
                <TouchableHighlight style = {styles.nextbutton} onPress = {this.nextAvailability}>
                    <Text style={styles.nextText}>NEXT</Text>
                </TouchableHighlight>   
             </View>

            </View>  
        }  

        {this.state.scheduler && this.state.submitted != true &&

        <View>

            <Text style = {styles.daysTime}> Pick some days and times that work for you! </Text>
    

            <Text style={styles.purpleText}>S    M   T    W     TH   F    SA</Text>
        <View style={{flexDirection : 'row'}}>
        <Text style={styles.purpleText}> {"\n"} 6PM{"\n"} 7PM{"\n"}{"\n"}8PM{"\n"}{"\n"}
            9PM{"\n"}  {"\n"}  {"\n"} 10PM{"\n"}</Text>

            <SelectMultiple style = {styles.scheduler}
                    items={sun}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                    renderLabel={renderLabel} />


            <SelectMultiple style = {styles.scheduler}
                    items={mon}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                    renderLabel={renderLabel} />

 
            <SelectMultiple style = {styles.scheduler}
                    items={tue}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                    renderLabel={renderLabel} />



            <SelectMultiple style = {styles.scheduler}
                    items={wed}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                    renderLabel={renderLabel} />


            <SelectMultiple style = {styles.scheduler} 
                    items={thu}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                    renderLabel={renderLabel} />


            <SelectMultiple style = {styles.scheduler}
                    items={fri}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                    renderLabel={renderLabel} />


            <SelectMultiple style = {styles.schedulerSat}
                    items={sat}
                    rowStyle={styles.checkbox}
                    selectedItems={this.state.selectedFruits}
                    onSelectionsChange={this.onSelectionsChange}
                    renderLabel={renderLabel} />



        </View>


                <TouchableOpacity style = {styles.nextbutton} onPress = {this.onSubmit} >
                    <Text style={styles.whiteText}>Send Date Request</Text>
                </TouchableOpacity>   

        </View>

        }
                {this.state.submitted == true && <View style={styles.container}> <Text style={styles.letsdate}> You've sent a date request to {this.state.otherUserName}! We will let you know when they respond! </Text> </View> }
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    meethalfway: {
        fontSize : 30,
        fontFamily: "Avenir-Light",
        backgroundColor: "#ffffff",
        textAlign: "center"
    },
    center : {
        alignItems: "center",
        textAlign: "center"
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
        marginTop: 5,
        height: 60,
        fontFamily: "Avenir-Light"
      },
      mapbutton: {
        backgroundColor: '#ffffff',
        justifyContent : 'center',
        marginLeft: 250,
        marginTop: 10,
        width: 100,
        marginBottom: 10
      },
      nextbutton: {
        backgroundColor: '#9ba2ff',
        alignItems : 'center',
        padding: 10,
        width: 150,
        marginLeft: 115,
        borderRadius: 10,
        marginTop: 10
      },
      container: {
        backgroundColor: "#ffffff"
      },
      purpleText : {
          color: "#9ba2ff"
      },
      whiteText : {
        color: "#ffffff",
        fontSize: 12,
        fontFamily: "Avenir-Light"
      },
      nextText : {
        color: "#ffffff",
        fontSize: 18,
        fontFamily: "Avenir-Light"
      },
      daysTime : {
        fontSize : 25,
        fontFamily: "Avenir-Light",
        backgroundColor: "#ffffff",
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10
      },
      letsdate: {
        fontSize : 20,
        fontFamily: "Avenir-Light",
        backgroundColor: "#ffffff",
        textAlign: "center"
    }
});