import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Platform,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import {LinearGradient} from "expo-linear-gradient";

const ForgetPassword = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  return (
    <ImageBackground
      source={require("../../assets/images/logbac.png")}
      style={styles.bacStyle}
    >
      <StatusBar hidden />
      <View style={{ paddingHorizontal: 40, marginTop: 110 }}>
        <Text style={styles.headText}>Reset Password,</Text>
        <Text style={styles.subheadText}>Please enter new password and confirm it!</Text>
      </View>
      <View style={styles.algn}>
        <Text style={styles.textHd}>New Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#4c4ef9" size={24} />
          <TextInput
            placeholder="New Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? <Feather name="eye-off" color="#4c4ef9" size={20} /> : <Feather name="eye" color="#4c4ef9" size={20} />}
          </TouchableOpacity>  
        </View>
        <Text style={[styles.textHd, { marginTop: 45 }]}>Confirm Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#4c4ef9" size={24} />
          <TextInput
            placeholder="Confirm Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? <Feather name="eye-off" color="#4c4ef9" size={20} /> : <Feather name="eye" color="#4c4ef9" size={20} />}
          </TouchableOpacity>  
        </View>
        <View style={styles.button}>
            <LinearGradient colors={['#ffa09c','#fd796d']} style={styles.logIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}  onPress={() => navigation.navigate('Login')}>Submit</Text>
            </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bacStyle: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  headText: {
    fontSize: 39,
    fontFamily: "Poppins-Bold",
    color: "#4c4ef9",
  },
  subheadText: {
    fontFamily: "Inter-MediumItalic",
    fontSize: 25,
    paddingRight: 40,
    lineHeight: 35,
    color: "#a2a2db",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 55,
    marginTop: 55,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderWidth: 2,
    borderRadius: 23,
    borderColor: "#4c4ef9",
  },
  textHd: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#4c4ef9",
    paddingBottom: 5,
  },
  algn: {
    flex: 3,
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginTop: 50,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  forgotText: {
    color: "#05375a",
    fontFamily: "Inter-BoldItalic",
    fontSize: 13,
    marginTop: 5,
    marginLeft: 255
  },
  button: {
    alignItems: 'center',
    marginTop: 75
  },
  logIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
   textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ForgetPassword;
