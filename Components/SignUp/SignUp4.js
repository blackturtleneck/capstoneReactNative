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
          <Text style={styles.header}>PICK YOUR DATE PREFERENCES</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.subheader}>ON A FIRST DATE I'D LIKE TO...</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={this.toggleCoffee}>
              <FontAwesome
                style={
                  this.state.coffee
                    ? styles.activeButton
                    : styles.inactiveButton
                }
              >
                {Icons.coffee}
              </FontAwesome>
              <Text style={styles.dateLabel}> GET COFFEE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={this.toggleDrinks}>
              <FontAwesome
                style={
                  this.state.drinks
                    ? styles.activeButton
                    : styles.inactiveButton
                }
              >
                {Icons.glass}
              </FontAwesome>
              <Text style={styles.dateLabel}>GET DRINKS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={this.toggleDinner}>
              <FontAwesome
                style={
                  this.state.dinner
                    ? styles.activeButton
                    : styles.inactiveButton
                }
              >
                {Icons.cutlery}{" "}
              </FontAwesome>
              <Text style={styles.dateLabel}>GET DINNER</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={this.toggleMuseum}>
              <FontAwesome
                style={
                  this.state.museum
                    ? styles.activeButton
                    : styles.inactiveButton
                }
              >
                {Icons.university}
              </FontAwesome>
              <Text style={styles.dateLabel}>GO TO A MUSEUM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={this.toggleShow}>
              <FontAwesome
                style={
                  this.state.show ? styles.activeButton : styles.inactiveButton
                }
              >
                {Icons.ticket}
              </FontAwesome>
              <Text style={styles.dateLabel}>GO TO A SHOW</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={this.togglePark}>
              <FontAwesome
                style={
                  this.state.park ? styles.activeButton : styles.inactiveButton
                }
              >
                {Icons.tree}
              </FontAwesome>
              <Text style={styles.dateLabel}>GO TO A PARK</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subheader}> TALK TO ME ABOUT...</Text>

          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={this.toggleAnimals}>
              <FontAwesome
                style={
                  this.state.animals
                    ? styles.activeButton
                    : styles.inactiveButton
                }
              >
                {Icons.paw}
              </FontAwesome>
              <Text>ANIMALS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={this.toggleTravel}>
              <FontAwesome
                style={
                  this.state.travel
                    ? styles.activeButton
                    : styles.inactiveButton
                }
              >
                {Icons.plane}
              </FontAwesome>
              <Text>TRAVELS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={this.toggleFood}>
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
            <TouchableOpacity style={styles.item} onPress={this.toggleMusic}>
              <FontAwesome
                style={
                  this.state.music ? styles.activeButton : styles.inactiveButton
                }
              >
                {Icons.music}
              </FontAwesome>
              <Text>MUSIC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={this.toggleSports}>
              <FontAwesome
                style={
                  this.state.sports
                    ? styles.activeButton
                    : styles.inactiveButton
                }
              >
                {Icons.futbolO}
              </FontAwesome>
              <Text>SPORTS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={this.toggleMovies}>
              <FontAwesome
                style={
                  this.state.movies
                    ? styles.activeButton
                    : styles.inactiveButton
                }
              >
                {Icons.film}
              </FontAwesome>
              <Text>MOVIES</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={this.toggleTech}>
              <FontAwesome
                style={
                  this.state.tech ? styles.activeButton : styles.inactiveButton
                }
              >
                {Icons.mobile}
              </FontAwesome>
              <Text>TECH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={this.toggleGaming}>
              <FontAwesome
                style={
                  this.state.gaming
                    ? styles.activeButton
                    : styles.inactiveButton
                }
              >
                {Icons.gamepad}
              </FontAwesome>
              <Text>SPORTS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={this.toggleNature}>
              <FontAwesome
                style={
                  this.state.nature
                    ? styles.activeButton
                    : styles.inactiveButton
                }
              >
                {Icons.tree}
              </FontAwesome>
              <Text>NATURE</Text>
            </TouchableOpacity>
          </View>
          <Button
            color={"#9BA2FF"}
            onPress={this.nextStep.bind(this)}
            title={"NEXT"}
          />
        </View>
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
    fontSize: 30,
    marginBottom: 5
  },
  inactiveButton: {
    color: "black",
    fontSize: 30,
    marginBottom: 5
  },
  row: {
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 10
  },
  header: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: 30,
    fontWeight: "bold",
    marginBottom: 5
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  subheader: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5
  },
  dateLabel: {
    width: 70,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    margin: 20,
    marginBottom: 10
  }
});
