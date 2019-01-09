import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

import ContactsData from "./ContactsData";


export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.navigationWrapper}>
          <Image source={require("../Assets/Images/back.png")} />
          <View style={styles.profilePhotoWrapper}>
            <Image
              source={require("../Assets/Images/10.png")}
              style={styles.headerProfileImage}
            />
          </View>
        </View>
        <View style={styles.statusWrapper}>
          <Text style={styles.routeHeader}>Your friends</Text>
          <Text style={styles.contactsCount}>275 Available </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerContainer: {
    height:125,
    // backgroundColor: "purple"
  },
  navigationWrapper: {
    flex: 1,
    // backgroundColor: "lightgreen",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal:16,
    marginTop:18,
  },
  statusWrapper: {
    flex: 1,
    // backgroundColor: "lightblue",
    marginHorizontal: 8,
    paddingHorizontal:14,
    justifyContent: 'center',
  },
  routeHeader: {
    fontSize: 25,
    color: "#333",
    fontWeight: "600"
  },
  contactsCount: {
    fontSize: 14,
    color: "#666",
    // borderWidth:5,
    backgroundColor:'rgba(255,255,255,.5)',
    height:20
  },
  profilePhotoWrapper: {
    // borderWidth: 3,
    borderColor: "gold",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    elevation: 20,
    marginRight:12,
    // marginTop:12
  },
  headerProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "dodgerblue"
  }
});
