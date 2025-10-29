import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ForgotPasswordScreen({ navigation }: any) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Background decorativo */}
        <View style={styles.backgroundDecoration}>
          <Image
            source={require("../../assets/Group.png")}
            style={styles.decorationImage}
            resizeMode="contain"
          />
        </View>

        {/* Botão Voltar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Steps centralizados e mais abaixo */}
        <View style={styles.stepsContainer}>
          <View style={styles.steps}>
            <View style={[styles.step, styles.stepActive]} />
            <View style={[styles.step, styles.stepInactive]} />
            <View style={[styles.step, styles.stepInactive]} />
          </View>
        </View>

        {/* Conteúdo principal */}
        <View style={styles.centerContainer}>
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Esqueceu a senha?</Text>
              <Text style={styles.subtitle}>
                Não te preocupes, nós te ajudamos a recuperar a sua conta em poucos
                minutos.
              </Text>
            </View>

            <TextInput
              style={[
                styles.input,
                inputFocused && styles.inputFocused
              ]}
              placeholder="Email ou número de telefone"
              placeholderTextColor="#999"
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => navigation.navigate("OTPVerification")}
            >
              <Text style={styles.continueButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 10,
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    padding: 8,
  },
  stepsContainer: {
    position: "absolute",
    top: 100, // a
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  steps: {
    flexDirection: "row",
    alignItems: "center",
  },
  step: {
    width: 30,
    height: 3,
    borderRadius: 2,
    marginHorizontal: 4,
  },
  stepActive: {
    backgroundColor: "#22C55E",
  },
  stepInactive: {
    backgroundColor: "#d3d6ff",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  backgroundDecoration: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "45%",
    justifyContent: "flex-end",
    alignItems: "center",
    opacity: 0.05,
  },
  decorationImage: {
    width: "90%",
    height: "90%",
  },
  content: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },
  titleContainer: {
    marginBottom: 40,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 12,
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    lineHeight: 20,
    maxWidth: 300,
  },
  input: {
    width: "100%",
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: "transparent",
    color: "#000",
  },
  inputFocused: {
    borderColor: "#3461FD",
    backgroundColor: "#fff",
  },
  continueButton: {
    width: "100%",
    backgroundColor: "#22C55E",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#22C55E",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  continueButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});