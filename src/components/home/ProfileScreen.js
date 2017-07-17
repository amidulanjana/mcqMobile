import React, { Component } from "react";
import { View } from "react-native";
import Cover from "./Profile/Cover";
import UserInfo from "./Profile/UserInfo";
import { Content, Container, Button, Text, Icon } from "native-base";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Icon
          style={{ color: "black" }}
          name={focused ? "ios-person" : "ios-person-outline"}
          size={24}
          style={{ color: tintColor }}
        />
      );
    }
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Cover />
          <UserInfo />
        </Content>
      </Container>
    );
  }
}

export default Profile;
