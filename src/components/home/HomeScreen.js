import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Home extends Component {
  static navigationOptions = {
    title: "Home",
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Icon
          style={{ color: "black" }}
          name="home"
          size={24}
          style={{ color: tintColor }}
        />
      );
    }
  };

  render() {
    return (
      <View>
        <Text>Walll</Text>
        <Icon style={{ color: "black" }} name="tags" size={18} />
      </View>
    );
  }
}

export default Home;
