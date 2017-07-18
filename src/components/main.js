import React, { Component } from "react";

import { View, StyleSheet, Platform } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";
// import Icon from "react-native-vector-icons/FontAwesome";

import LoginScreen from "./login/LoginScreen";
import SecondScreen from "./SecondScreen";
import HomeScreen from "./home/HomeScreen";
import ProfileScreen from "./home/ProfileScreen";
import NotificationScreen from "./home/NotificationScreen";
import SearchScreen from "./home/SearchScreen";
import CommentScreen from "./home/Wall/CommentScreen";
import QuestionPaperScreen from "./home/Wall/QuestionPaperScreen";

class Main extends Component {
  render() {
    const MainNavigator = StackNavigator(
      {
        login: { screen: LoginScreen },
        home: {
          screen: TabNavigator(
            {
              home: { screen: HomeScreen },
              Search: { screen: SearchScreen },
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
        },
        comment: { screen: CommentScreen },
        questionPaper: { screen: QuestionPaperScreen }
      },
      {
        navigationOptions: ({ navigation }) => ({
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
