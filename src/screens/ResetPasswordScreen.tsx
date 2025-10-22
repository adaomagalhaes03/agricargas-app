import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Cabeçalho no topo */}
      <View style={styles.header}>
        <Text style={styles.title}>Repor a Senha</Text>
        <Text style={styles.subtitle}>
          Crie uma nova senha que seja forte e fácil de lembrar, mas se esquecer
          pode contar conosco para recuperar novamente!
        </Text>
      </View>

      {/* Inputs e botão */}
      <View style={styles.content}>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Nova senha"
            placeholderTextColor="#999"
            secureTextEntry={!showNewPassword}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity
            onPress={() => setShowNewPassword(!showNewPassword)}
            style={styles.iconContainer}
          >
            <Ionicons
              name={showNewPassword ? "eye" : "eye-off"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirmar nova senha"
            placeholderTextColor="#999"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.iconContainer}
          >
            <Ionicons
              name={showConfirmPassword ? "eye" : "eye-off"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {/* Botão Confirmar Senha */}
       <TouchableOpacity
  style={styles.loginButton}
  onPress={() => navigation.navigate("Login" as never)}
>
  <Text style={styles.loginButtonText}>Confirmar Senha</Text>
</TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  header: {
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    marginTop: -40,
    alignItems: "center",
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1b8f55",
    borderRadius: 10,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#1b8f55",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
