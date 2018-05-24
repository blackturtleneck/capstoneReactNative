import React, { Component } from "react";
import { Button, View, StyleSheet, Image } from "react-native";
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";
import { firestore, auth } from "../FirestoreConfig";
import logo from "./img/ampr-logo.png";
import { firebase } from "@firebase/app";

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
        <Button
          containerStyle={{
            padding: 10,
            width: 150,
            margin: 20,
            borderRadius: 4,
            backgoundColor: "rgb(73,104,173)"
          }}
          style={{ fontSize: 18, color: "white" }}
          onPress={this._onLoginFacebook}
          title="Login with Facebook"
        />
      </View>
    );
  }

  //Create response callback.
  _responseInfoCallback = (error, result) => {
    if (error) {
      alert("Error fetching data: " + error.toString());
    } else {
      const user = firestore.collection("users").doc(result.email);
      let setWithMerge = user
        .set(
          {
            name: result.name,
            birthday: result.birthday,
            gender: result.gender,
            photos: result.photos,
            photoURL: result.picture.data.url,
            isVerified: true
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

  _onLoginFacebook = () => {
    LoginManager.logInWithReadPermissions([
      "public_profile",
      "user_birthday",
      "user_gender",
      "user_photos"
    ])
      .then(result => {
        if (result.isCancelled) {
          return Promise.reject(new Error("The user cancelled the request"));
        }
        console.log(
          `Login success with permissions: ${result.grantedPermissions.toString()}`
        );
        return AccessToken.getCurrentAccessToken();
      })
      .then(data => {
        const credential = firebase.auth.FacebookAuthProvider.credential(
          data.accessToken
        );
        return auth.signInWithCredential(credential);
      })
      .then(currentUser => {
        const infoRequest = new GraphRequest(
          "/me?fields=name,email,picture,gender,photos,birthday",
          null,
          this._responseInfoCallback
        );
        new GraphRequestManager().addRequest(infoRequest).start();
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
  };
}
