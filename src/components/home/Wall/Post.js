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
            <Thumbnail source={profileImg} />
            <Body>
              <Text>John</Text>
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
        <CardItem >
          <Left style={{ margin:0 }}>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text style={{ paddingLeft: 0, paddingRight: 0 }}> 12 Likes</Text>
            </Button>
          </Left>
          <Body style={{right:5}} >
            <Button
              transparent
              onPress={() => {
                this.renderCommentScreen(this.props.navigation);
              }}
            >
              <Icon active name="chatbubbles" />
              <Text style={{ width: 100 ,paddingLeft: 0, paddingRight: 0}}> 4 Comments</Text>
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
              <Text style={{ paddingLeft: 0, paddingRight: 0 }}> Paper</Text>
            </Button>
          </Right>
        </CardItem>
      </Content>
    );
  }
}

export default Post;
