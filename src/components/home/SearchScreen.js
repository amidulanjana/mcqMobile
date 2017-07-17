import React, { Component } from "react";
import { View, Platform } from "react-native";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";

class Search extends Component {
  static navigationOptions = {
    header: (
      <Header
        searchBar
        rounded
        style={{ marginTop: Platform.OS === "android" ? 24 : 0 }}
      >
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    ),
    tabBarIcon: ({ tintColor, focused }) => {
      return (
        <Icon
          style={{ color: "black" }}
          name={focused ? "ios-search" : "ios-search-outline"}
          size={24}
          style={{ color: tintColor }}
        />
      );
    }
  };

  render() {
    return <View />;
  }
}

export default Search;
