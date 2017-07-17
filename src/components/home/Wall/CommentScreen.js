import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Icon,
  Container,
  Content,
  Card,
  CardItem,
  Footer,
  Button,
  FooterTab,
  Text,
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
      <Container>
        <Card>
          <Content>
            <Post />
            <View
              style={{
                borderBottomColor: "#c9c9c9",
                borderBottomWidth: 1
              }}
            />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
            <UserComment />
          </Content>
        </Card>
        <Footer>
          <FooterTab>
            <Content>
              <Item rounded>
                <Input
                  placeholder="Rounded Textbox"
                  style={styles.commentInput}
                />
              </Item>
            </Content>
          </FooterTab>
        </Footer>
      </Container>
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
  }
});

export default CommentScreen;
