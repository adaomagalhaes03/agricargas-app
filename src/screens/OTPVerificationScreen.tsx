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

export default function OTPVerificationScreen({ navigation }: any) {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // apenas um dígito
    setOtp(newOtp);

    // Auto focus no próximo input
    if (value && index < 4) {
      // Você precisaria usar refs aqui para focar no próximo input
    }
  };

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
            <View style={[styles.step, styles.stepInactive]} />
          </View>
        </View>

        {/* Conteúdo principal */}
        <View style={styles.centerContainer}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>ENTER OTP</Text>
              <Text style={styles.subtitle}>
                Introduza o código OTP que acabámos de enviar
                {"\n"}no seu e-mail/número de telefone.
              </Text>
            </View>

            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={[
                    styles.otpInput,
                    focusedIndex === index && styles.otpInputFocused
                  ]}
                  value={digit}
                  keyboardType="number-pad"
                  maxLength={1}
                  onChangeText={(value) => handleOtpChange(value, index)}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(-1)}
                />
              ))}
            </View>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => navigation.navigate("ResetPassword")}
            >
              <Text style={styles.confirmButtonText}>Repor Senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resendButton}>
              <Text style={styles.resendText}>
                Não recebeu o código?{" "}
                <Text style={styles.resendLink}>Enviar novamente</Text>
              </Text>
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
    top: 100, // Step no topo a 100
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
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  otpInput: {
    backgroundColor: "#F9FAFB",
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 8,
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 18,
    color: "#000",
  },
  otpInputFocused: {
    borderColor: "#3461FD",
    backgroundColor: "#fff",
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
  resendButton: {
    marginTop: 24,
  },
  resendText: {
    color: "#666",
    fontSize: 14,
    textAlign: "center",
  },
  resendLink: {
    color: "#22C55E",
    fontWeight: "bold",
  },
});