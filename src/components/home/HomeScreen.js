import React, { Component } from "react";
import { View, Platform } from "react-native";
import { Container, Content, Icon, Card } from "native-base";

import Post from "./Wall/Post";

class Home extends Component {
  static navigationOptions = {
    title: "Home",
    headerLeft: null,
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Icon
          style={{ color: "black" }}
          name={focused ? "ios-home" : "ios-home-outline"}
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
          <Card>
            <Post navigation={this.props.navigation} />
          </Card>
          <Post />
          <Post />
          <Post />
        </Content>
      </Container>
    );
  }
}

export default Home;
