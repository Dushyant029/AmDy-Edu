import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList,
  ImageBackground,
} from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";
import Carousel from "react-native-snap-carousel";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const BanksScreen = ({ navigation, route }) => {
  const Users = [
    {
      key: "1",
      userImage:
        "https://raw.githubusercontent.com/Dushyant029/Images/main/avatars/8.png",
      userName: "Jabe",
      transactionDate: "18 Sep 2021",
      amount: "₹100",
      credit: true,
    },
    {
      key: "2",
      userImage:
        "https://raw.githubusercontent.com/Dushyant029/Images/main/avatars/3.png",
      userName: "Tina",
      transactionDate: "18 Sep 2021",
      amount: "₹652",
      credit: false,
    },
    {
      key: "3",
      userImage:
        "https://raw.githubusercontent.com/Dushyant029/Images/main/avatars/7.png",
      userName: "Sam",
      transactionDate: "18 Sep 2021",
      amount: "₹46",
      credit: false,
    },
    {
      key: "4",
      userImage:
        "https://raw.githubusercontent.com/Dushyant029/Images/main/avatars/4.png",
      userName: "Jini",
      transactionDate: "19 Sep 2021",
      amount: "₹1300",
      credit: true,
    },
    {
      key: "5",
      userImage:
        "https://raw.githubusercontent.com/Dushyant029/Images/main/avatars/5.png",
      userName: "Mathe",
      transactionDate: "19 Sep 2021",
      amount: "₹10",
      credit: true,
    },
    {
      key: "6",
      userImage:
        "https://raw.githubusercontent.com/Dushyant029/Images/main/avatars/1.png",
      userName: "Shyam",
      transactionDate: "18 Sep 2021",
      amount: "₹8",
      credit: true,
    },
    {
      key: "7",
      userImage:
        "https://raw.githubusercontent.com/Dushyant029/Images/main/avatars/2.png",
      userName: "Xalxo",
      transactionDate: "18 Sep 2021",
      amount: "₹78",
      credit: false,
    },
    {
      key: "8",
      userImage:
        "https://raw.githubusercontent.com/Dushyant029/Images/main/avatars/6.png",
      userName: "Ram",
      transactionDate: "19 Sep 2021",
      amount: "₹5632",
      credit: true,
    },
  ];

  // Carousel data

  const Images = [
    {
      image: require("../../../assets/images/card3.png"),
    },
    {
      image: require("../../../assets/images/card2.png"),
    },
    {
      image: require("../../../assets/images/card1.png"),
    },
  ];

  const { width, height } = Dimensions.get("window");
  const carouselRef = useRef(null);

  const RenderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback>
        <Image
          source={item.image}
          style={{ width: 360, height: 240, borderRadius: 10 }}
        />
      </TouchableWithoutFeedback>
    );
  };

  // SLIDING PANEL

  const [dragRange, setDragRange] = useState({
    top: height - 80,
    bottom: 160,
  });

  const _draggedValue = new Animated.Value(180);

  const ModalRef = useRef(null);

  return (
    <ImageBackground
      source={require("../../../assets/images/banbac.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <View style={{ paddingTop: 50, paddingHorizontal: 14 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: "#4c4ef9",
                  fontSize: 35,
                  fontFamily: "Poppins-Bold",
                  width: 200,
                  alignSelf: "center",
                  textAlign: "center",
                  marginLeft: 100,
                }}
              >
                Payment Section
              </Text>
            </View>
          </View>

          <View>
            <Carousel
              layout={"tinder"}
              ref={carouselRef}
              data={Images}
              renderItem={RenderItem}
              sliderWidth={width}
              itemWidth={width - 50}
              swipeThreshold={100}
              layoutCardOffset={-12}
              inactiveSlideOpacity={0.4}
              containerCustomStyle={{
                overflow: "visible",
                marginVertical: 10,
              }}
              contentContainerCustomStyle={{
                paddingTop: 14,
              }}
            />
          </View>

          <View>
            <Text style={{ color: "#000", opacity: 0.6, marginBottom: 10 }}>
              Choose Course Authors
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.AddUser}>
                <View style={styles.AddUserIconbg}>
                  <MaterialIcons
                    name="add"
                    color="white"
                    size={28}
                    style={{ alignSelf: "center" }}
                  />
                </View>
                <Text style={{ color: "#4c4ef9" }}>Add Authors</Text>
              </TouchableOpacity>
              <FlatList
                inverted
                horizontal
                data={Users}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.AddUser}>
                      <Image
                        style={styles.AddUserIconbg}
                        source={{ uri: item.userImage }}
                      />
                      <Text style={{ color: "#4c4ef9" }}>{item.userName}</Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <SlidingUpPanel
            ref={ModalRef}
            draggableRange={dragRange}
            animatedValue={_draggedValue}
            backdropOpacity={0}
            snappingPoints={[360]}
            height={height + 20}
            friction={0.9}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                borderRadius: 50,
                padding: 14,
              }}
            >
              <View style={styles.PanelHandle}></View>
              <View>
                <Text style={{ marginVertical: 16, color: "#000" }}>
                  Recent Transactions
                </Text>
              </View>

              <View style={{ height: 500, paddingBottom: 10 }}>
                <FlatList
                  data={Users}
                  keyExtractor={(item) => item.key}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.PanelItemContainer}>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <View style={{ marginRight: 10 }}>
                            <Image
                              source={{ uri: item.userImage }}
                              style={styles.PanelImage}
                            />
                          </View>
                          <View>
                            <Text style={{ fontSize: 14, color: "#000" }}>
                              {item.userName}
                            </Text>
                            <Text
                              style={{
                                fontSize: 10,
                                color: "#000",
                                opacity: 0.6,
                              }}
                            >
                              {item.transactionDate}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#000",
                              marginHorizontal: 2,
                            }}
                          >
                            {item.amount}
                          </Text>

                          {item.credit ? (
                            <MaterialIcons
                              name="arrow-drop-up"
                              size={22}
                              color="green"
                            />
                          ) : (
                            <MaterialIcons
                              name="arrow-drop-down"
                              size={22}
                              color="#ff3838"
                            />
                          )}
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("CoursesScreen")}
                >
                  <LinearGradient
                    colors={["#ffa09c", "#fd796d"]}
                    style={styles.logIn}
                  >
                    <Text style={[styles.textSign, { color: "#fff" }]}>
                      Read More
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </SlidingUpPanel>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  ProfileImage: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: "#4853ef",
    borderRadius: 6,
    position: "absolute",
    right: 6,
    borderWidth: 2,
    borderColor: "#000",
  },
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 14,
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: "#fea19a",
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  PanelHandle: {
    height: 6,
    width: 50,
    backgroundColor: "#666",
    borderRadius: 6,
    alignSelf: "center",
    marginTop: 6,
  },
  PanelItemContainer: {
    borderWidth: 0.4,
    borderColor: "#666",
    padding: 14,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  PanelImage: {
    width: 30,
    height: 30,
    backgroundColor: "#000",
    borderRadius: 40,
  },
  PanelButton: {
    padding: 14,
    width: 200,
    justifyContent: "center",
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
  },
  PanelButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
  },
  logIn: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 100,
    marginRight: 100,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default BanksScreen;
