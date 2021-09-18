import React from "react";
import { Text, View, StyleSheet, Image, Dimensions, Alert, StatusBar } from "react-native";

import Swiper from "react-native-swiper";
import slides from "../components/slides";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const Onboarding = ({navigation}) => {

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Swiper
        autoplay={true}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        {slides.map((slides) => {
          return (
            <View key={slides.id} style={styles.slide}>
              <Image source={slides.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{slides.desc}</Text>
              </View>
            </View>
          );
        })}
      </Swiper>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/images/logo.png")} style={styles.log} />
      </View>

      <View style={styles.button}>
        <LinearGradient colors={["#ffa09c", "#fd796d"]} style={styles.logIn}>
          <Text
            style={[styles.textSign, { color: "#fff" }]}
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            Get start here
          </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  log:{
    width: 120,
    height: 120,
    alignItems: "center",
  },
  image: {
    width: width,
    height: height,
  },
  dot: {
    backgroundColor: "#fd796d",
    width: 9,
    height: 9,
    borderRadius: 9,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "#4244e6",
    width: 9,
    height: 9,
    borderRadius: 9,
    marginLeft: 3,
    marginRight: 3,
  },
  logoContainer: {
    width: width,
    position: "absolute",
    top: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: 130,
    bottom: 150,
    right: 30,
    position: "absolute",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  text: {
    fontFamily: "Inter-BoldItalic",
    color: "#000",
    fontSize: 20,
    fontWeight: "100",
  },
  button: {
    width: 300,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    marginLeft: 65,
    marginRight: 65,
    bottom: 81,
  },
  logIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Onboarding;