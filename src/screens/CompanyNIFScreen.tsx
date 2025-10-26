import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CompanyNIFScreen() {
  const navigation = useNavigation();
  const [nif, setNif] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/profile.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Conteúdo central */}
        <View style={styles.content}>
          <Text style={styles.title}>
            Olá, <Text style={styles.highlight}>Empresário</Text>
          </Text>
          <Text style={styles.subtitle}>Como está?</Text>

          <Text style={styles.description}>
            Informe o NIF da sua empresa para prosseguirmos.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite o NIF da empresa"
            placeholderTextColor="#999"
            value={nif}
            onChangeText={setNif}
            keyboardType="numeric"
          />
        </View>

        {/* Botão Avançar */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("NextStepScreen" as never)}
        >
          <Text style={styles.nextButtonText}>Avançar</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </TouchableOpacity>

        {/* Barra de progresso */}
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
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  highlight: {
    color: "#1b8f55",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#e5e5e5",
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    borderWidth: 1.3,
    borderColor: "#1b8f55",
    width: "90%",
  },
  nextButton: {
    flexDirection: "row",
    backgroundColor: "#1b8f55",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    width: 140,
    position: "absolute",
    bottom: 80,
    right: 25,
  },
  nextButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 6,
  },
  progressBarContainer: {
    position: "absolute",
    bottom: 30,
    left: 25,
    right: 25,
    height: 6,
    backgroundColor: "#dcdcdc",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    width: "70%",
    height: "100%",
    backgroundColor: "#1b8f55",
  },
});
