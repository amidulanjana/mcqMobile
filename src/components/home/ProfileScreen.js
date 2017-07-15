import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Icon
          style={{ color: "black" }}
          name="user"
          size={24}
          style={{ color: tintColor }}
        />
      );
    }
  };

  render() {
    return (
      <View>
        <Text>Profile1</Text>
      </View>
    );
  }
}

export default Profile;
