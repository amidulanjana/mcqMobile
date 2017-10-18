import React, { Component } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import {
  Icon,
  Container,
  Content,
  Card,
  CardItem,
  Button,
  Text,
  Item,
  Input,
  Body,
  CheckBox,
  ListItem,
  Right
} from "native-base";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchFlagAnswers } from "../../../actions/papers";

const { width, height } = Dimensions.get("window");

const QuestionFlag = props => {
  return (
    <View style={{ padding: 10 }}>
      <Card style={{ width: 50, height: 50, backgroundColor: props.color }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1
          }}
        >
          <Icon
            style={{ color: "black" }}
            name={props.icon}
            size={24}
            style={{ color: "white" }}
          />
        </View>
      </Card>
    </View>
  );
};

class QuestionsAnswered extends Component {
  componentWillMount() {
    this.props.fetchFlagAnswers();
  }

  renderFlagAnswers(flagList) {
    debugger;
    // return flagList.map((flag, index) => {
    //   return <QuestionFlag color={"#17a2b8"} icon={"ion-alert"} key={index} />;
    // });
    var indents = [];
    for (var i = 1; i <= this.props.totalQuestions; i++) {
      if (_.includes(flagList, i)) {
        indents.push(
          <QuestionFlag color={"#28a745"} icon={"md-checkmark"} key={i} />
        );
      } else {
        indents.push(
          <QuestionFlag color={"#17a2b8"} icon={"ion-alert"} key={i} />
        );
      }
    }
    return indents;
  }

  render() {
    return (
      <Card style={{ height: height - 90 }}>
        <CardItem header>
          <Text>Question Answered</Text>
        </CardItem>
        <CardItem>
          <Content>
            <View style={{ flex: 1 }}>
              <View style={Styles.flagsContainer}>
                {this.renderFlagAnswers(this.props.flagList)}

                {/* <QuestionFlag color={"#28a745"} icon={"md-checkmark"} /> */}
              </View>
            </View>
          </Content>
        </CardItem>
        <CardItem footer>
          <Button
            small
            primary
            onPress={() => {
              debugger;
              this.props.swipe(-2);
            }}
          >
            <Text>Submit </Text>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

var Styles = StyleSheet.create({
  flagsContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

const mapStateToProps = state => {
  debugger;
  return {
    flagList: state.papers.flagList
  };
};

export default connect(mapStateToProps, { fetchFlagAnswers })(
  QuestionsAnswered
);
