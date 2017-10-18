import React, { Component } from "react";
import { Text, View, Image, Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import { getQuestions } from "../../../actions/papers";

const { width } = Dimensions.get("window");

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: "black",
    fontSize: 30
  }
};

import Question from "./Question";
import QuestionsAnswered from "./QuestionsAnswered";

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: "black", fontSize: 20 }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  );
};

class QuestionPaperScreen extends Component {
  jumpToSlide(value) {
    this.swiper.scrollBy(value);
  }

  renderQuestions(questions) {
    var indents = [];
    debugger;
    for (var i = 0; i <= questions.length; i++) {
      if (i == questions.length) {
        indents.push(
          <View style={styles.slide} key={questions.length}>
            <ScrollView>
              <QuestionsAnswered
                swipe={slide => this.jumpToSlide(slide)}
                totalQuestions={questions.length}
              />
            </ScrollView>
          </View>
        );
      } else {
        indents.push(
          <View style={styles.slide} key={questions[i]._id}>
            <ScrollView>
              <Question
                index={i + 1}
                question={questions[i].question}
                answers={questions[i].answers}
                questionID={questions[i]._id}
              />
            </ScrollView>
          </View>
        );
      }
    }
    return indents;
  }

  componentWillMount() {
    const { state } = this.props.navigation;
    this.props.getQuestions(state.params.paperID);
  }

  render() {
    if (this.props.questions) {
      return (
        <Swiper
          style={styles.wrapper}
          renderPagination={renderPagination}
          loop={false}
          ref={swiper => {
            this.swiper = swiper;
          }}
        >
          {this.renderQuestions(this.props.questions)}
        </Swiper>
      );
    }
    return <Text>Loading ..</Text>;
  }
}

const mapStateToProps = state => {
  return {
    questions: state.papers.questions
  };
};

export default connect(mapStateToProps, { getQuestions })(QuestionPaperScreen);
