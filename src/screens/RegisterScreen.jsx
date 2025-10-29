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

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [nameFocused, setNameFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
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

        {/* Conteúdo centralizado */}
        <View style={styles.centerContainer}>
          {/* Título */}
          <View style={styles.header}>
            <Text style={styles.title}>Registrar</Text>
            <Text style={styles.subtitle}>
              Crie sua conta para começar a usar o aplicativo.
            </Text>
          </View>

          {/* Campos centralizados */}
          <View style={styles.formContainer}>
            <TextInput
              style={[
                styles.input,
                nameFocused && styles.inputFocused
              ]}
              placeholder="Nome completo"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            />

            <TextInput
              style={[
                styles.input,
                phoneFocused && styles.inputFocused
              ]}
              placeholder="Número de telefone"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              onFocus={() => setPhoneFocused(true)}
              onBlur={() => setPhoneFocused(false)}
            />

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

            <View style={[
              styles.passwordContainer,
              confirmPasswordFocused && styles.passwordContainerFocused
            ]}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirmar senha"
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

            {/* Botão */}
            <TouchableOpacity 
              style={styles.registerButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.registerButtonText}>Registrar</Text>
            </TouchableOpacity>

            {/* Link para login */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Já tem uma conta? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signupLink}>Entrar</Text>
              </TouchableOpacity>
            </View>
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
  formContainer: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
  },
  input: {
    width: "100%",
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
  registerButton: {
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
  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
    marginBottom: 30,
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