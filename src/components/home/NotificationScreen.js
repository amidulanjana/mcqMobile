import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Notification extends Component {
  static navigationOptions = {
    title: "Notification",
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Icon
          style={{ color: "black" }}
          name="globe"
          size={24}
          style={{ color: tintColor }}
        />
      );
    }
  };

  render() {
    return (
      <View>
        <Text>Notification</Text>
      </View>
    );
  }
}

export default Notification;
