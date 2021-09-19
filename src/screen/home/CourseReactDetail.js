import React from "react";
import { Text, View, StyleSheet, Alert, Image, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import Details from "./components/Details";

const { width, height } = Dimensions.get("window");

export default class CourseReactDetailScreen extends React.Component{
  render(){
  return (
    <ImageBackground
      source={require("../../../assets/images/reactbac.png")}
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
          onPress={() => this.props.navigation.navigate("CoursesScreen")}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#8bbcdb",
          }}
        >
          <Image
            source={require("../../../assets/images/a1.png")}
            style={{ height: 15, width: 20 }}
          />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#8bbcdb",
            marginLeft: 312,
          }}
        >
          <Image
            source={require("../../../assets/images/hum.png")}
            style={{ height: 15, width: 20 }}
          />
        </View>
      </View>
      <Image
        source={require("../../../assets/images/c1.png")}
        style={{
          height: 55,
          width: 55,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <Text
        style={{
          color: "#FFF",
          fontFamily: "Poppins-Bold",
          fontSize: 35,
          width: 200,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        React JS
      </Text>
      <Text
        style={{
          color: "#FFF",
          fontFamily: "Inter-BoldItalic",
          fontSize: 25,
          width: 200,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Fullstack Guide
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
        alwaysOpen={510}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 30,
            marginTop: 40,
            marginLeft: 60,
          }}
        >
          <Image
            source={require("../../../assets/images/avatar1.png")}
            style={{
              height: 50,
              width: 50,
              borderWidth: 2,
              borderColor: "#4c4ef9",
              borderRadius: 50,
            }}
          />
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={{
                color: "#345c74",
                fontFamily: "Poppins-Bold",
                fontSize: 18,
              }}
            >
              K. Dushyant Reddy
            </Text>
            <Text
              style={{
                color: "#4c4ef9",
                fontFamily: "Inter-BoldItalic",
                fontSize: 12,
              }}
            >
              Author, React Developer
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f0f0fc",
              width: 40,
              height: 40,
              borderRadius: 40,
            }}
          >
            <Image source={require("../../../assets/images/a2.png")} />
          </View>
        </View>
        <View style={{
            marginTop: 30,
            marginLeft: 30,}}>
          <Details
            num={1}
            color="#fde6e6"
            percent={25}
            duration="1hr 10min"
            title="Getting Started"
            onPress={() => this.props.navigation.navigate("CourseVideoScreen")}
          />
          <Details
            num={2}
            color="#f9e1fc"
            percent={50}
            duration="2hrs 25min"
            title="Javascript Refresher"
          />
          <Details
            num={3}
            color="#e8f1fd"
            percent={0}
            duration="3hrs 40min"
            title="React Basics and Components"
          />
          <Details
            num={4}
            color="#e5ffef"
            percent={0}
            duration="2hrs 20min"
            title="Testing React Apps"
          />
          <Details
            num={5}
            color="#fbfaf6"
            percent={0}
            duration="30min"
            title="Course Roundup!"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingVertical: 5,
            backgroundColor: "#f0f0fc",
            marginHorizontal: 115,
            paddingVertical: 15,
            alignItems: "center",
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#4c4ef9",
              fontFamily: "Poppins-Bold",
              fontSize: 13,
            }}
          >
            Resume last lesson
          </Text>
        </View>
      </Modalize>
    </ImageBackground>
  );
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: 241,
  },
  slide: {
    width: width,
    height: 241,
  },
  slide_text_wrapper: {
    position: "relative",
    bottom: 215,
    right: -20,
    width: width - 100,
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