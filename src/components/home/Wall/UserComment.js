import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from "native-base";

import profileImg from "../../../../assets/images/profile.jpg";

export default class UserComment extends Component {
  render() {
    return (
      <List>
        <ListItem avatar>
          <Left>
            <Thumbnail source={profileImg} />
          </Left>
          <Body>
            <Text>Kumar Pratik</Text>

            <Text note>
              {this.props.comment}
            </Text>
          </Body>
          <Right>
            <Text note>3:43 pm</Text>
          </Right>
        </ListItem>
      </List>
    );
  }
}
