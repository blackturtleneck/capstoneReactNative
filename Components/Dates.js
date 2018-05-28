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
  import DateMap from './DateMap';

export default class Dates extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userEmail : this.props.navigation.state.params.userEmail,
            otherUser : this.props.navigation.state.params.userEmail,
            location : '',
            showMap : false
        }
    }

    onButtonPress = (location) => {
        console.log(location)
        this.setState({
            viewSection:true
        })
    }

    renderMoreInformation1 = () => {
        this.setState({
            printText1:true,
            location: "Fremont Brewery"  
        });
    }

    renderMoreInformation2 = () => {
        this.setState({
            printText2: true,
            location: "Schilling Cider"  
        });
    }

    renderMoreInformation3 = () => {
        this.setState({
            printText3:true,
            location: "The Backdoor"  
        });
    }

    renderMoreInformation4 = () => {
        this.setState({
            printText4:true,
            location: "The Barrel Thief"  
        });
    }

    _renderMap = () => {
        this.setState(prevState =>({
            showMap : !prevState.showMap
        }));
    }

  render() {
    return (
        <ScrollView>

        <Text style = {styles.meethalfway}> Let's Meet Halfway! </Text>
        <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation1} >
                    <Text>Fremont Brewery</Text>
                </TouchableOpacity>
                {this.state.printText1 && <Text> More information about Fremont Brewery</Text>}

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation2}  >
                    <Text>Schilling Cider</Text>
                </TouchableOpacity>  
                {this.state.printText2 && <Text> More information about Schilling Cider</Text>}

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation3} >
                    <Text>The Backdoor</Text>
                </TouchableOpacity>
                {this.state.printText3 && <Text> More information about The Backdoor</Text>}

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation4} >
                    <Text>The Barrel Thief</Text>
                </TouchableOpacity>              
                {this.state.printText4 && <Text>More information about The Barrel Thief</Text>}                                
        
                <TouchableOpacity style = {styles.button} onPress = {this._renderMap} >
                    <Text>View on Map</Text>
                </TouchableOpacity>     

                {this.state.showMap && <DateMap/> }                                        
        

                <TouchableOpacity style = {styles.nextbutton} >
                    <Text>Next</Text>
                </TouchableOpacity>                                              
                
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    meethalfway: {
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: "#DDDDDD",
        height: 60,
        padding: 20,
        marginTop: 5
      },
      mapbutton: {

      },
      nextbutton: {

      }
});