import React, { Component } from "react";
import { Image, View, TextInput, Text, StyleSheet, Picker } from "react-native";

export default class SignUp extends Component {
  constructor(props) {
    console.log("props", props);
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.view}>
        <Image source={require("./img/signup-header.png")} />
        <Text style={styles.label}>NAME</Text>
        <TextInput value={this.props.user.displayName} />
        <Text style={styles.label}>GENDER</Text>
        {/* <ModalPicker
          data={genderData}
          style={styles.picker}
          initValue={"Choose a gender"}
          onChange={option => this.setState({ gender: option })}
        >
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              height: 30
            }}
            editable={false}
            placeholder="Select something yummy!"
            value={this.state.gender}
          />
        </ModalPicker> */}

        {/* <Picker
        // onValueChange={(itemValue, itemIndex) =>
        //   this.setState({ gender: itemValue })
        // }
        >
          >
          <Picker.Item label="FEMALE" value="female" />
          <Picker.Item label="MALE" value="male" />
          <Picker.Item label="BOTH" value="both" />
        </Picker> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  label: {
    marginTop: 10,
    fontWeight: "bold"
  },
  picker: { height: 30, width: 100 }
});
