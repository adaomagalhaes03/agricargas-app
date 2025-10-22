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

export default function OTPVerificationScreen({ navigation }: any) {
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // apenas um dígito
    setOtp(newOtp);
  };

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
          <View style={[styles.step, { backgroundColor: "#1b8f55" }]} />
          <View style={[styles.step, { backgroundColor: "#d3d6ff" }]} />
        </View>

        {/* Conteúdo principal */}
        <View style={styles.content}>
          <Text style={styles.title}>ENTER OTP</Text>
          <Text style={styles.subtitle}>
            Introduza o código OTP que acabámos de enviar
            {"\n"}no seu e-mail/número de telefone.
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                value={digit}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={(value) => handleOtpChange(value, index)}
              />
            ))}
          </View>

               <TouchableOpacity
  style={styles.confirmButton}
  onPress={() => navigation.navigate("ResetPassword")}
>
  <Text style={styles.confirmText}>Repor Senha</Text>
</TouchableOpacity>



          <TouchableOpacity style={styles.resendButton}>
            <Text style={styles.resendText}>
              Não recebeu o código?{" "}
              <Text style={styles.resendLink}>Enviar novamente</Text>
            </Text>
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
  },
  imageStyle: {
    opacity: 0.08,
    position: "absolute",
    bottom: -40,
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
    alignItems: "center",
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
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 30,
  },
  otpInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  confirmButton: {
    backgroundColor: "#1b8f55",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  resendButton: {
    marginTop: 15,
  },
  resendText: {
    color: "#666",
    fontSize: 14,
    textAlign: "center",
  },
  resendLink: {
    color: "#1b8f55",
    fontWeight: "bold",
  },
});
