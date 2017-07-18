import React, { Component } from "react";
import { View } from "react-native";
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

import Question from "./Question";

class QuestionPaperScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Question />
          <Question />
        </Content>
      </Container>
    );
  }
}

export default QuestionPaperScreen;
