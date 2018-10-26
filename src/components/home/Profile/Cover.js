import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";

import profileImg from "../../../../assets/images/profile.jpg";

class Cover extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.profileImgWrapper}>
            <Image source={profileImg} style={styles.profileImg} />
          </View>

          <View
            style={{
              flex: 2,
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <View style={styles.profileHeaderWrapper}>
              <View style={styles.iconContainer}>
                <Text style={{ fontWeight: "bold" }}>Top</Text>
                <Text style={{ color: "#777", fontSize: 11 }}>Rank</Text>
              </View>
              <View style={styles.iconContainer}>
                <Text style={{ fontWeight: "bold" }}>3</Text>
                <Text style={{ color: "#777", fontSize: 11 }}>Score</Text>
              </View>
              <View style={styles.iconContainer}>
                <Text style={{ fontWeight: "bold" }}>Newbie</Text>
                <Text style={{ color: "#777", fontSize: 11 }}>
                  Achievements
                </Text>
              </View>
            </View>
            <View>
              <Button small primary>
                <Text>Edit Profile</Text>
              </Button>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>John March</Text>
          <Text>SoftWare Engineer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flexDirection: "row"
  },
  profileImgWrapper: {
    flex: 1,
    margin: 5,
    marginBottom: 5
  },
  profileImg: {
    width: 100,
    height: 100,
    alignSelf: "stretch",
    borderRadius: 50,
    borderColor: "rgba(255,255,255,0.8)",
    borderWidth: 4
  },
  profileHeaderWrapper: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10
  },

  iconContainer: {
    marginTop: 15,
    marginLeft: 15,
    flexDirection: "column",
    alignItems: "center"
  }
});

export default Cover;
