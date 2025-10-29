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
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      {/* Background decorativo */}
      <View style={styles.backgroundDecoration}>
        <Image
          source={require("../../assets/Group.png")}
          style={styles.decorationImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.content}>
        {/* Título e subtítulo */}
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.subtitle}>
          Seja bem vindo, vamos lá entre com seus dados para continuar.
        </Text>

        {/* Campo de email */}
        <TextInput
          style={[
            styles.input,
            emailFocused && styles.inputFocused
          ]}
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />

        {/* Campo de senha com ícone de ver senha */}
        <View style={[
          styles.passwordContainer,
          passwordFocused && styles.passwordContainerFocused
        ]}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}
          >
            <Ionicons
              name={showPassword ? "eye-outline" : "eye-off-outline"}
              size={22}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    color: "#666",
    fontSize: 14,
    marginBottom: 40,
    lineHeight: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F9FAFB",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "transparent",
    color: "#000",
  },
  inputFocused: {
    borderColor: "#3461FD",
    backgroundColor: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 8,
    marginBottom: 8,
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
  forgotButton: {
    alignSelf: "flex-end",
    marginBottom: 30,
    marginTop: 4,
  },
  forgotText: {
    color: "#999",
    fontSize: 13,
  },
  loginButton: {
    backgroundColor: "#22C55E",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#22C55E",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  signupText: {
    color: "#666",
    fontSize: 14,
  },
  signupLink: {
    color: "#22C55E",
    fontWeight: "bold",
    fontSize: 14,
  },
});