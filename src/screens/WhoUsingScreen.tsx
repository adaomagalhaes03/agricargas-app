import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function WhoUsingScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require("../../assets/profile-2.png")} // usa aqui a tua imagem
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <Text style={styles.title}>
            QUEM ESTÁ{" "}
            <Text style={styles.highlight}>USANDO</Text>
            {"\n"}A NOSSA APLICAÇÃO?
          </Text>

          <Text style={styles.subtitle}>
            Siga algumas instruções simples e vamos construir o seu perfil
            AgriCargas!
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
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)", // leve escurecimento sobre a imagem
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  content: {
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  highlight: {
    color: "#22C55E", // verde tailwind (para "USANDO")
  },
  subtitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 28,
  },
  progressContainer: {
    width: "80%",
    height: 8,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 10,
    marginBottom: 40,
    overflow: "hidden",
  },
  progressBar: {
    width: "60%", // percentagem preenchida (ajusta conforme o step)
    height: "100%",
    backgroundColor: "#22C55E",
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: "#22C55E",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
