import React, { useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableRipple, TouchableOpacity, Switch } from "react-native";

import { FontAwesome, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
 

const ProfileScreen = ({ navigation, route }) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/logbac.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
          
      <Text
        style={{
          color: "#FFF",
          fontFamily: "Poppins-Bold",
          fontSize: 35,
          width: 200,
          alignSelf: "center",
          textAlign: "center",
          marginTop: 60
        }}
      >
        Profile
      </Text>
        <Image
          source={require("../../../assets/images/2.png")}
          style={{
            height: 120,
            width: 120,
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 20
          }}
        />
      <Text
        style={{
          color: "#4c4ef9",
          fontFamily: "Inter-BoldItalic",
          fontSize: 18,
          width: 200,
          marginTop: 10,
          marginBottom: 50,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        AmDy Edu
      </Text>
        

        {/*Menu List*/}

        <View style={styles.menuContainer}>
          <View style={styles.menuLine}></View>
          <TouchableOpacity style={styles.menuItems}>
            <FontAwesome name="user" size={24} color="#4c4ef9" />
            <Text style={styles.menuText}>AmDy Edu</Text>            
          </TouchableOpacity>

          <View style={styles.menuLine}></View>
          <TouchableOpacity style={styles.menuItems}>
            <Feather name="smartphone" size={24} color="#4c4ef9" />
            <Text style={styles.menuText}>+91 xxxxx xxxxx</Text>            
          </TouchableOpacity>


          <View style={styles.menuLine}></View>
          <TouchableOpacity style={styles.menuItems} onPress={() => navigation.navigate('About')}>
          <FontAwesome name="envelope" color="#4c4ef9" size={24} />
            <Text style={styles.menuText}>amdy@edu.com</Text>
          </TouchableOpacity>

          <View style={styles.menuLine}></View>
          <TouchableOpacity style={styles.menuItems}>
          <FontAwesome name="lock" color="#4c4ef9" size={24} />
            <Text style={styles.menuText}>*******</Text>
          </TouchableOpacity>

          <View style={styles.menuLine}></View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <LinearGradient colors={["#ffa09c", "#fd796d"]} style={styles.logIn}>
              <Text style={[styles.textSign, { color: "#fff" }]}>
                Log Out
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    padding: 20,
    width: '100%',
    height: 147,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
    marginBottom: 10,
    flex: 1
  },
  profileAvatar: {
    width: 120,
    height: 120,
    marginTop: -10,
    marginRight: 20
  },

  //Profile Details

  profile: {    
    color: "#FFF",
    fontSize: 35,
    fontFamily: "Poppins-Bold",
    fontWeight: "bold",
    paddingVertical: 20,
    textAlign: "center",
  },
  johnDoe: {
    color: "#393b3a",
    fontSize: 18,
    fontFamily: 'Inter-MediumItalic',
    marginTop: 11,
    marginRight: 20,
    textAlign: 'right'
  },

  //Settings Menu

  menuContainer: {
    flex: 3
  },

  menuLine: {
    width: 300,
    borderTopWidth: 1,
    borderTopColor: '#ff877d',
    alignSelf: 'center',
    marginBottom: 25

  },

  menuTopItems: {
    flexDirection: 'row',
    marginLeft: 60,
    marginRight: 60,
    justifyContent: "space-between",
  },

  menuItems: {
    flexDirection: 'row',
    marginLeft: 60,
    marginRight: 60,
  },

  menuIcon: {
    width: 20,
    height: 20
  },

  menuTopText: {
    fontFamily: "Inter-BoldItalic",
    fontSize: 16,
    marginBottom: 25
  },

  menuText: {
    fontFamily: "Inter-BoldItalic",
    fontSize: 16,
    marginLeft: 50,
    marginBottom: 25,
    textAlign: 'center'
  },
  logIn: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 120,
    marginRight: 120,
    marginTop: 20
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
