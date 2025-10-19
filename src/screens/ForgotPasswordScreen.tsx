import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ForgotPasswordScreen({ navigation }: any) {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  return (
    <ImageBackground
      source={require("../../assets/Group.png")}
      style={styles.background}
      resizeMode="contain"
      imageStyle={styles.imageStyle}
    >
      <View style={styles.container}>
        {/* Botão Voltar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Indicadores de progresso */}
        <View style={styles.steps}>
          <View style={[styles.step, { backgroundColor: "#1b8f55" }]} />
          <View style={[styles.step, { backgroundColor: "#d3d6ff" }]} />
          <View style={[styles.step, { backgroundColor: "#d3d6ff" }]} />
        </View>

        {/* Conteúdo principal */}
        <View style={styles.content}>
          <Text style={styles.title}>Esqueceu a senha?</Text>
          <Text style={styles.subtitle}>
            Não te preocupes, nós te ajudamos a recuperar a sua conta em 2min
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Email ou número de telefone"
            placeholderTextColor="#999"
            value={emailOrPhone}
            onChangeText={setEmailOrPhone}
          />

          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  imageStyle: {
    opacity: 0.1,
    position: "absolute",
    bottom: -50,
    right: 0,
    left: 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  steps: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  step: {
    width: 30,
    height: 3,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: "#f2f4f7",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 25,
    width: "100%",
  },
  continueButton: {
    backgroundColor: "#1b8f55",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  continueText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
