import React, { Component } from "react";

import { View, Text, StyleSheet, Platform } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import LoginScreen from "./login/LoginScreen";
import SecondScreen from "./SecondScreen";
import HomeScreen from "./home/HomeScreen";
import ProfileScreen from "./home/ProfileScreen";
import NotificationScreen from "./home/NotificationScreen";

class Main extends Component {
  render() {
    const MainNavigator = StackNavigator(
      {
        login: { screen: LoginScreen },
        home: {
          screen: TabNavigator(
            {
              home: { screen: HomeScreen },
              profile: { screen: ProfileScreen },
              Notification: { screen: NotificationScreen }
            },
            {
              tabBarOptions: {
                showLabel: false,
                showIcon: true,
                tabBarPosition: "bottom"
              }
            }
          )
        }
      },
      {
        navigationOptions: ({ navigation }) => ({
          headerLeft: null,
          headerStyle: {
            marginTop: Platform.OS === "android" ? 24 : 0
          }
        })
      }
    );

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {},
  navigationBarStyle: {
    backgroundColor: "red"
  },
  navigationBarTitleStyle: {
    color: "white"
  }
});

export default Main;
