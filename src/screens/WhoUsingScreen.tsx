import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function WhoUsingScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require("../../assets/profile-2.png")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>
            QUEM ESTA{"\n"}
            <Text style={styles.highlight}>USANDO A NOSSA{"\n"}</Text>
            APLICAÇAO?
          </Text>

          <Text style={styles.subtitle}>
            Siga as instruções simples e vamos{"\n"}
            construir o seu perfil agricangas!
          </Text>

          {/* Barra de progresso */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar} />
          </View>

          {/* Botão Avançar */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ChooseProfile")}
          >
            <Text style={styles.buttonText}>Avançar →</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingBottom: 60,
  },
  content: {
    alignItems: "flex-start",
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
    lineHeight: 38,
  },
  highlight: {
    color: "#22C55E",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    textAlign: "left",
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 40,
    opacity: 0.9,
  },
  progressContainer: {
    width: "100%",
    height: 6,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 3,
    marginBottom: 40,
    overflow: "hidden",
  },
  progressBar: {
    width: "33%", // Primeiro step de 3
    height: "100%",
    backgroundColor: "#22C55E",
    borderRadius: 3,
  },
  button: {
    backgroundColor: "#22C55E",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignSelf: "flex-end",
    shadowColor: "#22C55E",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});