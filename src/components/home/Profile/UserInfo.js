import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class UserInfo extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  }
});

export default UserInfo;
