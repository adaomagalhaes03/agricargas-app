import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo ou ícone do app */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/Group.png")} // coloca teu ícone aqui
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Título e subtítulo */}
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>
        Seja bem vindo, vamos lá entre com seus dados para continuar.
      </Text>

      {/* Campo de email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Campo de senha com ícone de ver senha */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconContainer}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {/* Esqueceu a senha */}
     <TouchableOpacity
  style={styles.forgotButton}
  onPress={() => navigation.navigate("ForgotPassword")}
>
  <Text style={styles.forgotText}>Esqueceu a senha?</Text>
</TouchableOpacity>

      {/* Botão Entrar */}
                  <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("SplashScreen")}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>



      {/* Criar conta */}
      <View style={styles.signupContainer}>
    <Text style={styles.signupText}>Não tem uma conta? </Text>
    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
      <Text style={styles.signupLink}>Criar Conta</Text>
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
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 90,
    height: 90,
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
    marginBottom: 25,
  },
  input: {
    backgroundColor: "#f2f4f7",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1b8f55",
    borderRadius: 10,
    marginBottom: 8,
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
  forgotButton: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },
  forgotText: {
    color: "#999",
    fontSize: 13,
  },
  loginButton: {
    backgroundColor: "#1b8f55",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#666",
  },
  signupLink: {
    color: "#1b8f55",
    fontWeight: "bold",
  },
});
