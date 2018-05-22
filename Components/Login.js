import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  LoginManager,
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                const infoRequest = new GraphRequest(
                  "/me?fields=name,email,picture",
                  null,
                  this._responseInfoCallback
                );
                // Start the graph request.
                new GraphRequestManager().addRequest(infoRequest).start();
              });
            }
          }}
          onLogoutFinished={() => alert("logout.")}
        />
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
    }
  };
}

// import React, { Component } from "react";
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity
// } from "react-native";
// import FBSDK, {
//   LoginManager,
//   GraphRequest,
//   GraphRequestManager,
//   AccessToken
// } from "react-native-fbsdk";
// import { db } from "../FirestoreConfig";

// ("// Create a graph request asking for user information with a callback to handle the response.");

// export default class Login extends Component {
//   //Create response callback.
//   _responseInfoCallback(error, result) {
//     console.log("hello");
//     if (error) {
//       alert("Error fetching data: " + error.toString());
//     } else {
//       alert("Success fetching data: " + result.toString());
//     }
//   }

//   _fbAuth() {
//     LoginManager.logInWithReadPermissions(["public_profile", "email"]).then(
//       function(result) {
//         if (result.isCancelled) {
//           alert("Login cancelled");
//         } else {
//           console.log("result", result);

//           const infoRequest = new GraphRequest(
//             "/me",
//             null,
//             this._responseInfoCallback
//           );

//           alert("Login successful");
//           AccessToken.getCurrentAccessToken().then(data => {
//             // Start the graph request.
//             new GraphRequestManager().addRequest(infoRequest).start();
//           });
//         }
//       },
//       function(error) {
//         alert("Login fail with error: " + error);
//       }
//     );
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity onPress={this._fbAuth}>
//           <Text>Login with Facebook</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
