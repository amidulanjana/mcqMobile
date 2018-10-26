import React, { Component } from "react";
import { View, Text } from "react-native";
import { Icon } from "native-base";

class Notification extends Component {
  static navigationOptions = {
    title: "Notification",
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Icon
          style={{ color: "black" }}
          name={focused ? "ios-notifications" : "ios-notifications-outline"}
          size={24}
          style={{ color: tintColor }}
        />
      );
    }
  };

  render() {
    return (
      <View>
        {/* <Text>Notification</Text> */}
      </View>
    );
  }
}

export default Notification;
