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

  renderQuestionPaperScreen(navigation) {
    if (navigation) {
      navigation.navigate("questionPaper");
    }
  }

  render() {
    return (
      <Content>
        <CardItem>
          <Left style={{ flex: 2 }}>
            <Thumbnail source={{ uri: this.props.authorImage }} />
            <Body>
              <Text>{this.props.author}</Text>
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
              uri: this.props.imageUrl
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
            <Button
              transparent
              onPress={() => {
                this.renderQuestionPaperScreen(this.props.navigation);
              }}
            >
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
