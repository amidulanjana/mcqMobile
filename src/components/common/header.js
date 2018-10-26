import React, { Component } from "react";
import { OS, Text, View } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.ViewStyle}>
        <Text style={styles.TextStyle}>
          {this.props.HeaderText}
        </Text>
      </View>
    );
  }
}

const styles = {
  ViewStyle: {
    backgroundColor: "#F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  TextStyle: {
    fontSize: 20
  }
};

export default Header;
