import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import ProgressCircle from "react-native-progress-circle";

export default class CourseList extends React.Component {
  render() {
    const { img, title, bg, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          backgroundColor: bg,
          padding: 20,
          marginHorizontal: 20,
          borderRadius: 20,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image source={img} style={{ width: 60, height: 60 }} />

        <View>
          <Text
            style={{
              color: "#345c74",
              fontFamily: "Poppins-Bold",
              fontSize: 18,
              paddingHorizontal: 20,
              width: 170,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#4c4ef9",
              fontFamily: "Inter-MediumItalic",
              fontSize: 12,
              paddingHorizontal: 20,
            }}
          >
            10 hours, 19 lessons
          </Text>
        </View>
        <Text
          style={{
            color: "#345c74",
            fontFamily: "Inter-MediumItalic",
            fontSize: 13,
            paddingLeft: 10,
            paddingRight: 30,
          }}
        >
          25%
        </Text>
        <ProgressCircle
          percent={30}
          radius={25}
          borderWidth={1.5}
          color="f580084"
          shadowColor="#FFF"
          bgColor="#FFF"
        >
          <Image source={require("../../../../assets/images/pl.png")} style={{ width: 15, height: 20 }}  />
        </ProgressCircle>
      </TouchableOpacity>
    );
  }
}
