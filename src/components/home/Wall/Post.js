import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  Icon
} from "native-base";

import profileImg from "../../../../assets/images/profile.jpg";

class Post extends Component {
  renderCommentScreen(navigation) {
    if (navigation) {
      navigation.navigate("comment");
    }
  }

  render() {
    return (
      <Content>
        <CardItem>
          <Left style={{ flex: 2 }}>
            <Thumbnail source={profileImg} />
            <Body>
              <Text>Amila</Text>
              <Text note>SoftWare Engineer</Text>
            </Body>
          </Left>
          <Right style={{ flex: 1 }}>
            <Text>11h ago</Text>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: "https://thetab.com/blogs.dir/9/files/2013/05/exam-paper.jpg"
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text> 12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button
              transparent
              onPress={() => {
                this.renderCommentScreen(this.props.navigation);
              }}
            >
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Button transparent>
              <Icon active name="ios-paper" />
              <Text> Paper</Text>
            </Button>
          </Right>
        </CardItem>
      </Content>
    );
  }
}

export default Post;