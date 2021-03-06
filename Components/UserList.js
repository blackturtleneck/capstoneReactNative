import React from "react";
import { FlatList, ListView, View, Text } from "react-native";
import { firestore } from "../FirestoreConfig";
import { List, ListItem } from "react-native-elements";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", this.props);
    console.log("screen props", this.props.screenProps);

    this.state = {
      user: {
        name: this.props.screenProps.user.displayName,
        email: this.props.screenProps.user.email
      }
    };
    console.log("this.state", this.state);
  }

  componentDidMount() {
    let currentComponent = this;
    let curUserList = [];
    firestore
      .collection("users")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          if (doc.get("name") !== currentComponent.state.user.name) {
            curUserList.push({
              email: doc.id,
              name: doc.get("name"),
              photoURL: doc.get("photoURL")
            });
          }
        });
        currentComponent.setState({ userList: curUserList });
        console.log("userList", userList);
      });
  }

  chooseUser = user => {
    console.log("hi");
    this.props.navigation.navigate("Messenger", {
      otherUser: user,
      user: this.state.user
    });
  };

  render() {
    let listItems = [];
    {
      this.state.userList &&
        (listItems = this.state.userList.map(user => (
          <ListItem
            title={user.name}
            roundAvatar
            avatar={{ uri: user.photoURL }}
            onPress={() => this.chooseUser(user)}
          />
        )));
    }
    console.log("user list", this.state.userList);
    return (
      <View className="user-list-wrapper">
        {this.state.userList && <List>{listItems}</List>}
      </View>
    );
  }
}
