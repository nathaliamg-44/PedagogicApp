import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";

import { useNavigation } from "../utils";

import { ButtonWithIcon, CategoryCard, NoticeCard } from "../components";
import { Notice } from "../redux";

const screenWidth = Dimensions.get("screen").width;
const _HomeScreen = () => {
  const { navigate } = useNavigation();

  const categories = [
    {
      id: "1",
      title: "Bienestar Estudiantil",
      icon: require("../images/yoga.png"),
    },
    { id: "2", title: "Universidad", icon: require("../images/uni.png") },
    { id: "3", title: "Biblioteca", icon: require("../images/bibli.png") },
  ];
  const notices: Notice[] = [
    {
      _id: "1",
      title: "DESARROLLO",
      subtitle: "Aplicación PedagogicApp en desarrollo",
      summary:"El acuerdo suscrito entre el gobierno nacional y las plataformas estudiantiles y profesorales el 14 de diciembre de 2018",
      info:"El acuerdo suscrito entre el gobierno nacional y las plataformas estudiantiles y profesorales el 14 de diciembre de 2018, no solamente contempló aspectos esenciales de sostenibilidad financiera de las universidades públicas en términos de recursos para la base presupuestal e inversión; también implicó en el punto 15 una revisión profunda sobre las políticas públicas para publicaciones científicas y divulgación de conocimiento lideradas por el entonces Colciencias, hoy Ministerio de Ciencia, Tecnología e Innovación. El acuerdo suscrito indica que “Las universidades públicas, editores, estudiantes de pregrado y posgrado, academias de ciencias e integrantes de la mesa de diálogo serían responsables de revisar las políticas públicas para publicaciones científicas y de divulgación en Colombia y hacer los comentarios pertinentes. Esa política pública debe incluir la identificación y valoración de un nuevo conocimiento derivado de todas las áreas, reconociendo los saberes tradicionales y ancestrales dentro de los diversos ejercicios de producción intelectual desde la cosmovisión de las diferentes etnias entendiendo la diversidad y la multiculturalidad ",
      date: "26 de mayo de 2021",
      autor: "Carlos Hernán López Ruiz",
      image: require("../images/pantalla.png") as ImageSourcePropType,
    },
    {
      _id: "2",
      title: "DISEÑO",
      subtitle: "Diseño página web Cinndet",
      summary: "El acuerdo suscrito entre el gobierno nacional y las plataformas estudiantiles y profesorales el 14 de diciembre de 2018",
      info: "as",
      date: "31 de abril de 2021",
      autor: "Juan Felipe Lucena Castro",
      image: require("../images/pan2.png") as ImageSourcePropType,
    },
    {
      _id: "3",
      title: "TRABAJO EN EQUIPO",
      subtitle: "Reunión semanal equipo cinndet",
      summary: "El acuerdo suscrito entre el gobierno nacional y las plataformas estudiantiles y profesorales el 14 de diciembre de 2018",
      info: "as",
      date: "31 de abril de 2021",
      autor: "Juan Felipe Lucena Castro",
      image: require("../images/pan3.png") as ImageSourcePropType,
    },
  ];

  const onTapNotice = (item: Notice) => {
    navigate("NoticePage", { notice: item });
  };

  const onTapBack = () => {
    navigate("HomePage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.cuadro}></View>

      <View style={styles.navigation}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            marginLeft: 20,
            marginTop: 60,
          }}
        >
          Explorar
        </Text>
        <View style={styles.absolute}>
          <ButtonWithIcon
            icon={require("../images/menu.png")}
            onTap={onTapBack}
            width={42}
            height={42}
          />
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categories}
              renderItem={({ item }) => (
                <CategoryCard
                  item={item}
                  onTap={() => {
                    alert("Próximamente solo en PedagogicApp");
                  }}
                />
              )}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                color: "#003E8F",
                marginHorizontal: 20,
                marginVertical: 20,
              }}
            >
              ¿Qué hay de nuevo en la universidad?
            </Text>
          </View>
          <View>
            {notices.map((item, index) => {
              return <NoticeCard key={index} item={item} onTap={onTapNotice} />;
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  navigation: {
    flexDirection: "row",
    flex: 2,
  },
  cuadro: {
    backgroundColor: "#00609C",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: "absolute",
    height: 220,
    width: screenWidth,
  },
  body: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  absolute: {
    marginTop: 70,
    marginLeft: 140,
  },
});

export { _HomeScreen };
