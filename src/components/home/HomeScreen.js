import React, { Component } from "react";
import { View, Platform, Text } from "react-native";
import { Container, Content, Icon, Card } from "native-base";
import { connect } from "react-redux";
import { getPapers } from "../../actions/papers";

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

  renderPapers(papers) {
    return papers.map(paper => {
      return (
        <Post
          key={paper._id}
          navigation={this.props.navigation}
          imageUrl={paper.image}
          author={paper.author.name}
          authorImage={paper.author.profileImg}
          paperID={paper._id}
        />
      );
    });
  }

  componentWillMount() {
    this.props.getPapers();
  }

  render() {
    if (this.props.papers) {
      return (
        <Container>
          <Content padder>
            {/* <Post imageUrl="https://thetab.com/blogs.dir/9/files/2013/05/exam-paper.jpg" />
            <Post imageUrl="http://cdn.xl.thumbs.canstockphoto.com/canstock38435762.jpg" />
            <Post imageUrl="http://1.bp.blogspot.com/-Pvn9pBKCmr8/VKQTryg3ZNI/AAAAAAAAAn0/4PPL1BYPURQ/s1600/mhcet.png" /> */}
            {this.renderPapers(this.props.papers)}
          </Content>
        </Container>
      );
    }
    return <Text>Loading...</Text>;
  }
}

const mapStateToProps = state => {
  return {
    papers: state.papers.papers
  };
};

export default connect(mapStateToProps, { getPapers })(Home);
