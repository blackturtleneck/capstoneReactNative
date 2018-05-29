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
  import SelectMultiple from 'react-native-select-multiple'

const sun = ['6', '7', '8', '9', '10'] ;
const mon = ['6', '7', '8', '9', '10'] ;
const tue = ['6', '7', '8', '9', '10'] ;
const wed = ['6', '7', '8', '9', '10'] ;
const thu = ['6', '7', '8', '9', '10'] ;
const fri = ['6', '7', '8', '9', '10'] ;
const sat = ['6', '7', '8', '9', '10'] ;


export default class Dates extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userEmail : this.props.navigation.state.params.userEmail,
            otherUser : this.props.navigation.state.params.userEmail,
            location : '',
            printText1 : false,
            printText2 : false,
            printText3 : false,
            printText4 : false,
            showMap : false,
            dateNames : true,
            selectedFruits: [],
            scheduler : false
        }
    }

    onSelectionsChange = (selectedFruits) => {
        console.log("selection Test" , selectedFruits)
        this.setState({ selectedFruits })
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
    }

    renderMoreInformation2 = () => {
        this.setState(prevState =>({
            printText2: !prevState.printText2,
            location: "Schilling Cider"  
        }));
    }

    renderMoreInformation3 = () => {
        this.setState(prevState =>({
            printText3:!prevState.printText3,
            location: "The Backdoor"  
        }));
    }

    renderMoreInformation4 = () => {
        this.setState(prevState =>({
            printText4:!prevState.printText4,
            location: "The Barrel Thief"  
        }));
    }

    _renderMap = () => {
        this.setState(prevState =>({
            showMap : !prevState.showMap
        }));
    }

    nextAvailability = () => {
        this.setState({
            scheduler : true,
            dateNames : false

        });
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
                {this.state.printText1 && <Text> This kid- and dog-friendly beer hall with bench tables serves up seasonal ales and free pretzels.</Text>}
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation2}  >
                <Image style={styles.image} source={require('./img/schilling.png')}/>
                    <Text style = {styles.buttonText}>Schilling Cider</Text>
                </TouchableOpacity> 

                <View> 
                {this.state.printText2 && <Text> A great tasting bar with 30+ craft ciders, on tap and in bottles (food can be ordered for delivery).</Text>}
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation3} >
                <Image style={styles.image} source={require('./img/backdoor.png')}/>
                    <Text>The Backdoor</Text>
                </TouchableOpacity>

                <View> 
                {this.state.printText3 && <Text> Speakeasy-style lounge behind Roxy's Diner, for cocktails, small plates and occasional live music.</Text>}
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this.renderMoreInformation4} >
                <Image style={styles.image} source={require('./img/barrelthief.png')}/>
                    <Text>The Barrel Thief</Text>
                </TouchableOpacity>   

               <View>               
                {this.state.printText4 && <Text>Inventive cocktails and small plates in a warm, eco-friendly setting with regular tastings and classes.</Text>}                                
                </View>   

                <TouchableOpacity style = {styles.button} onPress = {this._renderMap} >
                    <Text>View on Map</Text>
                </TouchableOpacity>     
            

                <TouchableOpacity style = {styles.button} onPress = {this.nextAvailability}>
                    <Text>Next</Text>
                </TouchableOpacity>   

            </View>  
        }  

        {this.state.scheduler &&

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


                <TouchableOpacity style = {styles.button}>
                    <Text>Send Date Request</Text>
                </TouchableOpacity>   

        </View>
        }
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
        padding: 10
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