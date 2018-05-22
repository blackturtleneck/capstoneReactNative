import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  LoginManager,
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";
import { firestore } from "../FirestoreConfig";
import logo from "./img/ampr-logo.png";

export default class Login extends Component {
  render() {
    return (
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          source={logo}
          style={{
            height: 150,
            width: 150,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30
          }}
        />
        <View style={styles.container}>
          <LoginButton
            readPermissions={[
              "public_profile",
              "user_birthday",
              "user_gender",
              "user_photos"
            ]}
            onLoginFinished={(error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                console.log("AccessToken", AccessToken.getCurrentAccessToken());
                AccessToken.getCurrentAccessToken().then(data => {
                  const infoRequest = new GraphRequest(
                    "/me?fields=name,email,picture,gender,photos,birthday",
                    null,
                    this._responseInfoCallback
                  );
                  // Start the graph request.
                  new GraphRequestManager().addRequest(infoRequest).start();
                });
              }
            }}
            onLogoutFinished={() => console.log("logout.")}
          />
        </View>
      </View>
    );
  }
  //Create response callback.
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert("Error fetching data: " + error.toString());
    } else {
      console.log("result", result);
      alert("Result Name: " + result.name);
      const user = firestore.collection("users").doc(result.email);
      let setWithMerge = user
        .set(
          {
            name: result.name,
            birthday: result.birthday,
            gender: result.gender,
            photos: result.photos,
            photoURL: result.picture.data.url
          },
          { merge: true }
        )
        .then(function() {
          // eslint-disable-line no-console
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          // eslint-disable-line no-console
          console.error("Error writing document: ", error);
        });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4267b2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});
