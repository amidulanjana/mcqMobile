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
          <Post
            navigation={this.props.navigation}
            imageUrl="http://1.bp.blogspot.com/-Pvn9pBKCmr8/VKQTryg3ZNI/AAAAAAAAAn0/4PPL1BYPURQ/s1600/mhcet.png"
          />
          <Post imageUrl="https://thetab.com/blogs.dir/9/files/2013/05/exam-paper.jpg" />
          <Post imageUrl="http://cdn.xl.thumbs.canstockphoto.com/canstock38435762.jpg" />
          <Post imageUrl="http://1.bp.blogspot.com/-Pvn9pBKCmr8/VKQTryg3ZNI/AAAAAAAAAn0/4PPL1BYPURQ/s1600/mhcet.png" />
        </Content>
      </Container>
    );
  }
}

export default Home;
