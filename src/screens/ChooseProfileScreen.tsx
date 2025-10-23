import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

export default function ChooseProfileScreen() {
  return (
    <ImageBackground
      source={require("../../assets/profile-1.png")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>Qual perfil é o Seu?</Text>
        <Text style={styles.subtitle}>
          Selecione uma das opções{"\n"}para prosseguirmos.
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.companyButton]}>
            <Text style={styles.buttonText}>Empresa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.vendorButton]}>
            <Text style={styles.buttonText}>Vendedor</Text>
          </TouchableOpacity>
        </View>

        {/* Indicador de progresso */}
        <View style={styles.progressContainer}>
          <View style={styles.progressActive} />
          <View style={styles.progressInactive} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    color: "#e5e5e5",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  companyButton: {
    backgroundColor: "#d6f5e0",
  },
  vendorButton: {
    backgroundColor: "#1b8f55",
  },
  buttonText: {
    color: "#ffffffff",
    fontWeight: "bold",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  progressActive: {
    width: 80,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#1b8f55",
    marginHorizontal: 4,
  },
  progressInactive: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
});
