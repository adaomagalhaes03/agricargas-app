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
import { useNavigation } from "@react-navigation/native";

export default function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPasswordFocused, setNewPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

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

        {/* Steps centralizados no topo */}
        <View style={styles.stepsContainer}>
          <View style={styles.steps}>
            <View style={[styles.step, styles.stepActive]} />
            <View style={[styles.step, styles.stepActive]} />
            <View style={[styles.step, styles.stepActive]} />
          </View>
        </View>

        {/* Conteúdo principal */}
        <View style={styles.centerContainer}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Repor a Senha</Text>
              <Text style={styles.subtitle}>
                Crie uma nova senha que seja forte e fácil de lembrar, mas se esquecer
                pode contar conosco para recuperar novamente!
              </Text>
            </View>

            {/* Campos de senha */}
            <View style={[
              styles.passwordContainer,
              newPasswordFocused && styles.passwordContainerFocused
            ]}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Nova senha"
                placeholderTextColor="#999"
                secureTextEntry={!showNewPassword}
                value={newPassword}
                onChangeText={setNewPassword}
                onFocus={() => setNewPasswordFocused(true)}
                onBlur={() => setNewPasswordFocused(false)}
              />
              <TouchableOpacity
                onPress={() => setShowNewPassword(!showNewPassword)}
                style={styles.iconContainer}
              >
                <Ionicons
                  name={showNewPassword ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color="#666"
                />
              </TouchableOpacity>
            </View>

            <View style={[
              styles.passwordContainer,
              confirmPasswordFocused && styles.passwordContainerFocused
            ]}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirmar nova senha"
                placeholderTextColor="#999"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onFocus={() => setConfirmPasswordFocused(true)}
                onBlur={() => setConfirmPasswordFocused(false)}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.iconContainer}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color="#666"
                />
              </TouchableOpacity>
            </View>

            {/* Botão Confirmar Senha */}
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => navigation.navigate("Login" as never)}
            >
              <Text style={styles.confirmButtonText}>Confirmar Senha</Text>
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
    top: 100,
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
  header: {
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
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 8,
    marginBottom: 16,
  },
  passwordContainerFocused: {
    borderColor: "#3461FD",
    backgroundColor: "#fff",
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: "#000",
  },
  iconContainer: {
    paddingHorizontal: 12,
  },
  confirmButton: {
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
  confirmButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});