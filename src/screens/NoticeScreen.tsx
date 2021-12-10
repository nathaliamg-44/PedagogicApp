import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ButtonWithIcon } from "../components";

import { connect } from "react-redux";

import { Notice } from "../redux";



interface NoticeProps {
  navigation: { getParam: Function; goBack: Function };
  onUpdateCart: Function;
}
const screenWidth = Dimensions.get("screen").width;
const _NoticeScreen: React.FC<NoticeProps> = (props) => {
  const { getParam, goBack } = props.navigation;

  const notice = getParam("notice") as Notice;

  return (
    <View style={styles.container}>
      <View style={styles.franja}></View>
      <View style={styles.navigation}>
        <Image
          style={{
            width: screenWidth,
            height: 239,
          }}
          source={notice.image}
        />
      </View>
      <View style={styles.body}>
        <View style={{ position: "relative" }}>
          <View style={styles.absolute}>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                marginLeft: 30,
                marginTop: 5,
                fontWeight: "bold",
              }}
            >
              {notice.subtitle}
            </Text>
          </View>
          <View style={styles.absolute2}>
            <ButtonWithIcon
              icon={require("../images/back.png")}
              onTap={() => goBack()}
              width={42}
              height={42}
            />
          </View>
          <View style={styles.absolute3}>
            <ButtonWithIcon
              icon={require("../images/menu.png")}
              onTap={() => goBack()}
              width={42}
              height={42}
            />
          </View>
        </View>
        <ScrollView>
          <View style={{ marginTop: 70, marginHorizontal: 30 }}>
            <Text style={styles.autor}>Por: {notice.autor}</Text>
            <Text style={styles.title}>{notice.title}</Text>
            <Text style={styles.date}>{notice.date}</Text>
            <Text style={styles.info}>{notice.info}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F2F2F2" },
  franja: { backgroundColor: "#00609C", flex: 1.3 },
  navigation: { flex: 5, alignItems: "center" },
  body: { flex: 11 },
  autor: {
    color: "#00609C",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  title: { color: "#4D5661", fontSize: 14, marginBottom: 6 },
  date: { color: "#00609C", fontSize: 14, marginBottom: 16 },
  info: { color: "#4D5661", fontSize: 14 },
  footer: { flex: 1, backgroundColor: "cyan" },

  icono: { position: "absolute", top: -100, left: -50 },
  absolute: {
    width: 320,
    height: 61,
    position: "absolute",
    top: -10,
    backgroundColor: "#00609C",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  absolute2: {
    position: "absolute",
    top: -175,
    left: 10,
  },
  absolute3: {
    position: "absolute",
    top: -175,
    right: 10,
  },
});



export { _NoticeScreen };
