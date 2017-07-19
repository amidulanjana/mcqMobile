import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  Platform
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Icon,
  Container,
  Content,
  Card,
  CardItem,
  Footer,
  Button,
  FooterTab,
  Item,
  Input
} from "native-base";

import Post from "../Wall/Post";
import UserComment from "./UserComment";

class CommentScreen extends Component {
  static navigationOptions = {
    title: "Maths - 2017 AL"
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "android" ? 88 : 64}
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.cardStyle}>
          <Post />
          <View
            style={{
              borderBottomColor: "#c9c9c9",
              borderBottomWidth: 1
            }}
          />
          <UserComment comment="Doing what you like will always keep you happy . ." />
          <UserComment comment="Paper is Good. Keep it up" />
          <UserComment comment="Well Done" />
          <UserComment comment="Well Done" />
          <UserComment comment="Well Done" />
        </ScrollView>

        <View
          style={{
            backgroundColor: "#fff",
            marginLeft: 5,
            marginRight: 5,
            borderTopWidth: 0,
            borderWidth: 1,
            borderRadius: 2,
            borderColor: "#ddd"
          }}
        >
          {/* <TextInput placeholder="Text" style={{ height: 40 }} /> */}

          <Item
            rounded
            style={{
              backgroundColor: "rgba(110, 110, 110, 0)",
              marginBottom: 5,
              marginLeft: 15,
              marginRight: 15
            }}
          >
            <Input
              placeholder="Write a comment..."
              style={{
                height: 40,
                marginLeft: 15,
                marginRight: 15
              }}
            />
            <Button transparent>
              <Icon active name="ios-send" />
            </Button>
          </Item>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  commentInput: {
    height: 40,
    top: 3,
    bottom: 3,
    paddingLeft: 15,
    paddingRight: 15
  },
  cardStyle: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

export default CommentScreen;
