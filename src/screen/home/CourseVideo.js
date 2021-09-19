import React from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import Details from "./components/Details";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

export default class CourseVideoScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar />
        <Video
          source={require("../../../assets/videos/v2.mp4")}
          rate={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          isLooping={false}
          useNativeControls
          style={style.video}
        />
        <Details
          color="#fde6e6"
          percent={25}
          duration="1hr 10min"
          title="Getting Started"
          num={1}
        />

        <Text
          style={{
            fontFamily: "Inter-BoldItalic",
            textAlign: "justify",
            color: "#345c74",
            paddingLeft: 42,
            paddingRight: 35,
            fontSize: 18,
          }}
        >
          React is a free and open-source front-end JavaScript library for
          building user interfaces or UI components. It is maintained by
          Facebook and a community of individual developers and companies. React
          can be used as a base in the development of single-page or mobile
          applications.React makes it painless to create interactive UIs. Design
          simple views for each state in your application, and React will
          efficiently update and render just the right components when your data
          changes. Declarative views make your code more predictable and easier
          to debug.
        </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CoursesScreen")}
          >
            <LinearGradient colors={["#ffa09c", "#fd796d"]} style={style.logIn}>
              <Text style={[style.textSign, { color: "#fff" }]}>
                Read More
              </Text>
            </LinearGradient>
          </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  video: {
    width: width,
    height: height / 3,
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  logIn: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 120,
    marginRight: 120,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
