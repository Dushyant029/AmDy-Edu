import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Modalize } from "react-native-modalize";
import CourseList from "./components/CourseList";

export default class CoursesScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/images/coursebac.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("HomeScreen")}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#ffc582",
            }}
          >
            <Image
              source={require("../../../assets/images/a1.png")}
              style={{ width: 20, height: 15 }}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 13,
              borderRadius: 10,
              marginTop: 30,
              backgroundColor: "#ffc582",
              marginLeft: 312,
            }}
          >
            <Image
              source={require("../../../assets/images/hum.png")}
              style={{ height: 15, width: 20 }}
            />
          </View>
        </View>
        <Text
          style={{
            color: "#fafafa",
            fontSize: 35,
            fontFamily: "Poppins-Bold",
            width: 200,
            alignSelf: "center",
            textAlign: "center",  
            marginTop: 34,
          }}
        >
          Courses Category
        </Text>

        <Modalize
          handleStyle={{
            marginTop: 30,
            backgroundColor: "#e9e9e9",
            width: 80,
          }}
          modalStyle={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
          alwaysOpen={500}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
        >
          <View style={{ marginTop: 40 }}>
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
            <CourseList
              img={require("../../../assets/images/c4.png")}
              title="Java Masterclass"
              bg="#f3daa7"
            />
            <CourseList
              img={require("../../../assets/images/c5.png")}
              title="Flutter - The Guide"
              bg="#a7f1f3"
            />
          </View>
        </Modalize>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    // width: width,
    height: 241,
  },
  slide: {
    // width: width,
    height: 241,
  },
  slide_text_wrapper: {
    position: "relative",
    bottom: 215,
    right: -20,
    // width: width - 100,
  },
  slide_text: {
    color: "#ffffff",
    fontFamily: "Inter-BoldItalic",
    fontSize: 28,
  },
  dot: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
});
