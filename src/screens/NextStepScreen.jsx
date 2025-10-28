import React, { useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NextStepScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("MainMenu" );
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={require("../../assets/load.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Estamos preparando tudo para si!</Text>
        <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  progressBarContainer: {
    width: "60%",
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 4,
    marginTop: 30,
    overflow: "hidden",
  },
  progressBar: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1b8f55",
  },
});
