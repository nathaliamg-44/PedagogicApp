import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import {  Notice } from "../redux";

const screenWidth = Dimensions.get("screen").width;

interface NoticeProps {
  item: Notice;
  onTap: Function;
}

const NoticeCard: React.FC<NoticeProps> = ({ item, onTap }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.leftContainer}>
          <Text style={{ color: "#7D8A9B", fontSize: 9 }}>{item.title}</Text>
          <Text style={{ color: "#003E8F", fontSize: 11, fontWeight: "bold" }}>
            {item.subtitle}
          </Text>
          <Text style={{ color: "#003E8F", fontSize: 8 }}>{item.summary}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: 128,
              height: 170,
              borderTopRightRadius: 20,
              backgroundColor: "gray",
            }}
            source={item.image}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.bottomContainer}
        onPress={() => onTap(item)}
      >
        <View
          style={{
            backgroundColor: "#005F9C",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: "100%",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Leer</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    height: 191,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
    
  },
  topContainer: {
    borderWidth: 0,
    flexDirection: "row",
    height: 162,
    padding: 0,
  },
  bottomContainer: { width: "100%" },
  leftContainer: {
    paddingVertical:10,
    paddingHorizontal: 15,
    height: 162,
    width: "60%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    shadowColor: "#000",
    elevation:  15,
  },
  imageContainer: {
    borderTopRightRadius: 20,
    width: "40%",
    height: 162,
    
  },
});

export { NoticeCard };
