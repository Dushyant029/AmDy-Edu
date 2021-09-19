import React, { useLayoutEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import CourseList from "./components/CourseList";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/homebac.png")}
        style={{ width: "100%", height: "110%" }}
      >
        <ScrollView>
          <View
            style={{
              width: "100%",
              alignItems: "flex-end",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 12,
                borderRadius: 10,
                marginTop: 30,
                backgroundColor: "#fe9c99",
              }}
            >
              <Image
                source={require("../../../assets/images/hum.png")}
                style={{ height: 15, width: 20 }}
              />
            </View>
          </View>
          <View style={{ paddingHorizontal: 40 }}>
            <Text style={styles.headText}>Welcome to AmDy,</Text>
            <Text style={styles.subheadText}>An E-Learning App!</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#e1e7fd",
              marginTop: 245,
              marginHorizontal: 20,
              borderRadius: 20,
              paddingVertical: 30,
              paddingLeft: 30,
            }}
          >
            <View>
              <Text
                style={{
                  color: "#345c74",
                  fontSize: 20,
                  fontFamily: "Poppins-Bold",
                  width: 250,
                  paddingRight: 100,
                }}
              >
                Start learning new Staff
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("CoursesScreen")}
                style={{
                  flexDirection: "row",
                  backgroundColor: "#f58084",
                  alignItems: "center",
                  marginTop: 20,
                  width: 120,
                  paddingVertical: 10,
                  borderRadius: 14,
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins-Bold",
                    fontSize: 12,
                  }}
                >
                  Categories
                </Text>
                <Image
                  source={require("../../../assets/images/a3.png")}
                  style={{ marginLeft: 20, width: 8, height: 8 }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={require("../../../assets/images/learn.png")}
              style={{ marginLeft: -50, width: "30%", height: "80%" }}
            />
          </View>
          <Text
            style={{
              color: "#345c74",
              fontFamily: "Poppins-Bold",
              fontSize: 20,
              paddingHorizontal: 20,
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            Courses in progress
          </Text>
          <CourseList
            img={require("../../../assets/images/c1.png")}
            title="React Native Development"
            bg="#A7E4F3"
            onPress={() => this.props.navigation.navigate("CourseReactDetailScreen")}
          />
          <CourseList
            img={require("../../../assets/images/c2.png")}
            title="JavaScript Development"
            bg="#f3eea7"
            onPress={() => this.props.navigation.navigate("CourseJsDetailScreen")}
          />
          <CourseList
            img={require("../../../assets/images/c3.png")}
            title="Android Development"
            bg="#c8f3a7"
          />
          <Text style={{ marginTop: 70 }}></Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headText: {
    fontSize: 40,
    fontFamily: "Poppins-Bold",
    color: "#4c4ef9",
  },
  subheadText: {
    fontFamily: "Inter-MediumItalic",
    fontSize: 20,
    paddingVertical: 10,
    paddingRight: 80,
    lineHeight: 15,
    color: "#fff",
  },
});
