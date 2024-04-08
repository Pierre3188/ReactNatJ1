import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  Platform,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";

import Constants from "expo-constants";

import { AntDesign } from "@expo/vector-icons";

// import chat from "./assets/chat.jpg";

// import { sharedStyle } from "./assets/style";

export default function App() {
  // console.log(Constants.statusBarHeight);

  // console.log(Platform.OS);

  return (
    // <View
    //   style={{ backgroundColor: "red", marginTop: 100, width: "50%" }}
    //   onPress={() => {
    //     console.log("view cliquée");
    //   }}
    // >
    //   <Text>Salut ceci est un test</Text>
    //   <Button
    //     title="Hey, i'm a button"
    //     onPress={() => {
    //       console.log("Clicked");
    //     }}
    //   ></Button>
    //   <TouchableOpacity
    //     style={{ backgroundColor: "green", color: "white" }}
    //     onPress={() => {
    //       // alert("Opacity button clicked");
    //     }}
    //     activeOpacity="0.8"
    //   >
    //     <Text style={{ color: "white" }}>Opacity Button</Text>
    //   </TouchableOpacity>

    //   <TouchableHighlight
    //     style={{ backgroundColor: "blue" }}
    //     onPress={() => {
    //       console.log("highlight cliqué");
    //     }}
    //     underlayColor={"pink"}
    //   >
    //     <Text>Highlight button</Text>
    //   </TouchableHighlight>
    //   <Pressable
    //     onPress={() => {
    //       alert("pressable touched");
    //     }}
    //     onLongPress={() => {
    //       alert("long click");
    //     }}
    //   >
    //     {({ pressed }) =>
    //       pressed ? <Text>I'm touched</Text> : <Text>Pressable</Text>
    //     }
    //   </Pressable>
    // </View>
    // <ScrollView
    //   style={{ gap: 10 }}
    //   contentContainerStyle={{ gap: 10 }}
    //   horizontal={true}
    // >
    //   <View style={{ backgroundColor: "red", height: 400, width: 400 }}></View>
    //   <View
    //     style={{ backgroundColor: "green", height: 400, width: 400 }}
    //   ></View>
    //   <View style={{ backgroundColor: "blue", height: 400, width: 400 }}></View>
    //   <View style={{ backgroundColor: "pink", height: 400, width: 400 }}></View>
    // </ScrollView>
    // <View style={{ flex: 1, backgroundColor: "green", flexDirection: "row" }}>
    //   <View style={{ backgroundColor: "blue", flex: 1, height: 50 }}></View>
    //   <View style={{ backgroundColor: "white", flex: 1, height: 50 }}></View>
    //   <View style={{ backgroundColor: "red", flex: 1, height: 50 }}></View>
    // </View>
    // <ActivityIndicator size="large" color={"red"} style={{ marginTop: 100 }} />
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View
    //     style={{
    //       flex: 1,
    //       backgroundColor: "red",
    //       marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
    //     }}
    //   >
    //     <Text>Salut je suis Lucas Roberto héhé</Text>
    //   </View>
    // </SafeAreaView>
    // <ScrollView>
    //   <Image source={require("./assets/chat.jpg")} />
    //   <Image source={chat} style={{ width: "100%" }} resizeMode="contain" />
    //   <Image
    //     source={{
    //       uri: "https://lemagduchat.ouest-france.fr/images/dossiers/2021-12/marche-chat-france-164220.jpg",
    //     }}
    //     style={{ width: "100%", height: 200 }}
    //     // resizeMode="contain"
    //   />
    // </ScrollView>
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="white" />
      <ScrollView
        style={{
          backgroundColor: "black",
          marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <View style={{ backgroundColor: "#393939", height: 50 }}>
          <Image
            source={{
              uri: "https://res.cloudinary.com/lereacteur-apollo/image/upload/v1684153265/apollo/lereacteur/React%20Native/logo-imdb_tj4n8g.png",
            }}
            style={styles.imdbImg}
            // resizeMode="contain"
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "blue",
            marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
          }}
        ></View>
        <View style={{ backgroundColor: "#212121", paddingBottom: 15 }}>
          <Text style={styles.filmTitle}> Interstellar </Text>
          <Text style={styles.filmInfos}>
            {" "}
            2014 PG-13 2h49min Adventure,Drama,Sci-Fi{" "}
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              style={styles.filmImage}
              source={require("./assets/film.jpg")}
            />
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={styles.filmDesc}>
                {" "}
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.{" "}
              </Text>
              <Pressable
                style={styles.addBtn}
                onPress={() => {
                  alert("pressable touched");
                }}
                onLongPress={() => {
                  alert("long click");
                }}
              >
                <Text style={styles.addBtnstyles}>+ ADD TO WATCHLIST</Text>
              </Pressable>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <View
              style={{
                flexDirection: "column",
                marginLeft: 50,
              }}
            >
              <AntDesign
                style={{ color: "yellow", marginLeft: 8, marginBottom: 7 }}
                name="star"
                size={24}
                color="black"
              />
              <Text style={styles.markStyles}>8.6/10</Text>
              <Text style={styles.markStyles2}>1.1M</Text>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 50 }}>
              <AntDesign
                style={{ color: "white", marginLeft: 22, marginBottom: 7 }}
                name="staro"
                size={24}
                color="black"
              />
              <Text style={styles.markStyles}>RATE THIS</Text>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 50 }}>
              <Text style={styles.markColorStyle}>74</Text>
              <Text style={styles.markStyles3}>Metascore</Text>
              <Text style={styles.markStyles2}>46 critic reviews</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 15, backgroundColor: "#212121" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginTop: 40,
            }}
          >
            <Text style={styles.topStyle}>Top Billed Cast</Text>
            <Text style={{ color: "#0377BD" }}>SEE ALL</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                gap: 10,
              }}
            >
              <View style={{}}>
                <Image
                  style={styles.actorsImage}
                  source={require("./assets/matthew.jpg")}
                />
                <View
                  style={{
                    padding: 10,
                    width: 140,
                    backgroundColor: "#2A2A2A",
                  }}
                >
                  <Text
                    style={styles.nameStyle}
                    numberOfLines={1}
                    ellipsizeMode="end"
                  >
                    Matthew McConnor
                  </Text>
                  <Text style={styles.charStyle}>Cooper</Text>
                </View>
              </View>
              <View>
                <Image
                  style={styles.actorsImage}
                  source={require("./assets/anne.jpg")}
                />
                <View
                  style={{
                    padding: 10,
                    width: 140,
                    backgroundColor: "#2A2A2A",
                  }}
                >
                  <Text
                    style={styles.nameStyle}
                    numberOfLines={1}
                    ellipsizeMode="end"
                  >
                    Anne Hathaway
                  </Text>
                  <Text style={styles.charStyle}>Brand</Text>
                </View>
              </View>
              <View>
                <Image
                  style={styles.actorsImage}
                  source={require("./assets/jessica.jpg")}
                />
                <View
                  style={{
                    padding: 10,
                    width: 140,
                    backgroundColor: "#2A2A2A",
                  }}
                >
                  <Text
                    style={styles.nameStyle}
                    numberOfLines={1}
                    ellipsizeMode="end"
                  >
                    Jessica Ch
                  </Text>
                  <Text style={styles.charStyle}>Murph</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <Text style={styles.nameStyle2}>Director</Text>
          <Text style={styles.charStyle2}>Christopher Nolan</Text>
          <Text style={styles.nameStyle2}>Writers</Text>
          <Text style={styles.charStyle2}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mainView: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  textRed: {
    backgroundColor: "red",
  },
  text2: {
    color: "white",
  },
  textBlue: {
    backgroundColor: "blue",
  },
  imdbImg: {
    width: 60,
    height: 30,
    marginTop: 10,
    marginLeft: 10,
  },
  filmTitle: {
    fontSize: 30,
    color: "white",
    marginBottom: 10,
  },
  filmInfos: {
    color: "grey",
    marginLeft: 5,
  },
  filmImage: {
    height: 150,
    width: 100,
    marginTop: 30,
    marginLeft: 10,
  },
  filmDesc: {
    color: "white",
    backgroundColor: "#212121",
    marginTop: 30,
    marginLeft: 10,
    width: 240,
    flexWrap: "wrap",
  },
  addBtn: {
    backgroundColor: "#084771",
    width: 240,
    height: 30,
    marginTop: 15,
    marginLeft: 15,
  },
  addBtnstyles: {
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  markStyles: {
    color: "white",
  },
  markStyles2: {
    color: "grey",
    marginLeft: 5,
    fontSize: 12,
  },
  markColorStyle: {
    backgroundColor: "#61C74F",
    color: "white",
    textAlign: "center",
    marginBottom: 5,
    width: 20,
    marginLeft: 35,
  },
  markStyles3: {
    color: "white",
    marginLeft: 15,
  },
  topStyle: {
    color: "white",
    fontSize: 20,
    lineHeight: 20,
  },
  actorsImage: {
    marginTop: 20,
    width: 140,
    height: 210,
  },
  nameStyle: {
    fontSize: 14,
    color: "white",
    width: 120,
  },
  charStyle: {
    fontSize: 14,
    color: "grey",
  },
  nameStyle2: {
    fontSize: 14,
    color: "white",
    marginLeft: 10,
    marginTop: 15,
    width: 160,
  },
  charStyle2: {
    fontSize: 14,
    color: "grey",
    marginLeft: 10,
  },
});
