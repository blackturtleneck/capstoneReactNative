import React from "react";
import {
  Image,
  View,
  TextInput,
  Text,
  StyleSheet,
  Item,
  Button,
  Slider,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { Icon } from "react-native-elements";

export default class SignUp4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coffee: this.props.fieldValues.dates.coffee,
      dinner: this.props.fieldValues.dates.dinner,
      drinks: this.props.fieldValues.dates.drinks,
      museum: this.props.fieldValues.dates.museum,
      show: this.props.fieldValues.dates.show,
      park: this.props.fieldValues.dates.park,

      travel: this.props.fieldValues.topics.travel,
      food: this.props.fieldValues.topics.food,
      music: this.props.fieldValues.topics.music,
      sports: this.props.fieldValues.topics.sports,
      movies: this.props.fieldValues.topics.movies,
      gaming: this.props.fieldValues.topics.gaming,
      nature: this.props.fieldValues.topics.nature,
      animals: this.props.fieldValues.topics.animals,
      tech: this.props.fieldValues.topics.tech
    };
    this.nextStep = this.nextStep.bind(this);

    this.toggleCoffee = this.toggleCoffee.bind(this);
    this.toggleDrinks = this.toggleDrinks.bind(this);
    this.toggleDinner = this.toggleDinner.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.toggleMuseum = this.toggleMuseum.bind(this);
    this.togglePark = this.togglePark.bind(this);

    this.toggleAnimals = this.toggleAnimals.bind(this);
    this.toggleTravel = this.toggleTravel.bind(this);
    this.toggleFood = this.toggleFood.bind(this);
    this.toggleMusic = this.toggleMusic.bind(this);
    this.toggleMovies = this.toggleMovies.bind(this);
    this.toggleSports = this.toggleSports.bind(this);
    this.toggleTech = this.toggleTech.bind(this);
    this.toggleGaming = this.toggleGaming.bind(this);
    this.toggleNature = this.toggleNature.bind(this);
  }

  // Dates Types
  toggleCoffee() {
    const currentState = this.state.coffee;
    this.setState({ coffee: !currentState });
  }
  toggleDinner() {
    const currentState = this.state.dinner;
    this.setState({ dinner: !currentState });
  }
  toggleDrinks() {
    const currentState = this.state.drinks;
    this.setState({ drinks: !currentState });
  }
  toggleShow() {
    const currentState = this.state.show;
    this.setState({ show: !currentState });
  }
  togglePark() {
    const currentState = this.state.park;
    this.setState({ park: !currentState });
  }
  toggleMuseum() {
    const currentState = this.state.museum;
    this.setState({ museum: !currentState });
  }

  // Topic Types
  toggleFood() {
    const currentState = this.state.food;
    this.setState({ food: !currentState });
  }
  toggleAnimals() {
    const currentState = this.state.animals;
    this.setState({ animals: !currentState });
  }
  toggleTravel() {
    const currentState = this.state.travel;
    this.setState({ travel: !currentState });
  }
  toggleMusic() {
    const currentState = this.state.music;
    this.setState({ music: !currentState });
  }
  toggleSports() {
    const currentState = this.state.sports;
    this.setState({ sports: !currentState });
  }
  toggleMovies() {
    const currentState = this.state.movies;
    this.setState({ movies: !currentState });
  }
  toggleTech() {
    const currentState = this.state.tech;
    this.setState({ tech: !currentState });
  }
  toggleGaming() {
    const currentState = this.state.gaming;
    this.setState({ gaming: !currentState });
  }
  toggleNature() {
    const currentState = this.state.nature;
    this.setState({ nature: !currentState });
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.row}>
          <TouchableHighlight onPress={this.props.previousStep}>
            <Image source={require("../img/back-arrow.png")} />
          </TouchableHighlight>
          <Text>PICK YOUR DATE PREFERENCES</Text>
          <Text>ON A FIRST DATE I'D LIKE TO...</Text>
          <TouchableOpacity onPress={this.toggleCoffee}>
            <FontAwesome
              style={
                this.state.coffee ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.coffee}
            </FontAwesome>
            <Text> GET COFFEE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleDrinks}>
            <FontAwesome
              style={
                this.state.drinks ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.glass}
            </FontAwesome>
            <Text>GET DRINKS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleDinner}>
            <FontAwesome
              style={
                this.state.dinner ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.cutlery}{" "}
            </FontAwesome>
            <Text>GET DINNER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={this.toggleMuseum}>
            <FontAwesome
              style={
                this.state.museum ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.university}
            </FontAwesome>
            <Text>GO TO A MUSEUM</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleShow}>
            <FontAwesome
              style={
                this.state.show ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.ticket}
            </FontAwesome>
            <Text>GO TO A SHOW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.togglePark}>
            <FontAwesome
              style={
                this.state.park ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.tree}
            </FontAwesome>
            <Text>GO TO A PARK</Text>
          </TouchableOpacity>
        </View>
        <Text>TALK TO ME ABOUT...</Text>

        <View style={styles.row}>
          <TouchableOpacity onPress={this.toggleAnimals}>
            <FontAwesome
              style={
                this.state.animals ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.paw}
            </FontAwesome>
            <Text>ANIMALS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleTravel}>
            <FontAwesome
              style={
                this.state.travel ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.plane}
            </FontAwesome>
            <Text>TRAVELS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleFood}>
            <FontAwesome
              style={
                this.state.food ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.cutlery}
            </FontAwesome>
            <Text>FOOD</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={this.toggleMusic}>
            <FontAwesome
              style={
                this.state.music ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.music}
            </FontAwesome>
            <Text>MUSIC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleSports}>
            <FontAwesome
              style={
                this.state.sports ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.futbolO}
            </FontAwesome>
            <Text>SPORTS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleMovies}>
            <FontAwesome
              style={
                this.state.movies ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.film}
            </FontAwesome>
            <Text>MOVIES</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={this.toggleTech}>
            <FontAwesome
              style={
                this.state.tech ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.mobile}
            </FontAwesome>
            <Text>TECH</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleGaming}>
            <FontAwesome
              style={
                this.state.gaming ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.gamepad}
            </FontAwesome>
            <Text>SPORTS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleNature}>
            <FontAwesome
              style={
                this.state.nature ? styles.activeButton : styles.inactiveButton
              }
            >
              {Icons.tree}
            </FontAwesome>
            <Text>NATURE</Text>
          </TouchableOpacity>
        </View>
        <Button onPress={this.nextStep.bind(this)} title={"NEXT"} />
      </View>
    );
  }

  nextStep(e) {
    e.preventDefault();
    var data = {
      dates: {
        coffee: this.state.coffee,
        dinner: this.state.dinner,
        drinks: this.state.drinks,
        museum: this.state.museum,
        show: this.state.show,
        park: this.state.park
      },
      topics: {
        travel: this.state.travel,
        food: this.state.food,
        music: this.state.music,
        sports: this.state.sports,
        movies: this.state.movies,
        gaming: this.state.gaming,
        nature: this.state.nature,
        animals: this.state.animals,
        tech: this.state.tech
      }
    };
    this.props.saveValues(data);
    this.props.nextStep();
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 40
  },
  activeButton: {
    color: "#9BA2FF",
    fontSize: 30
  },
  inactiveButton: {
    color: "#C4C4C4",
    fontSize: 30
  },
  row: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 10
  }
});
