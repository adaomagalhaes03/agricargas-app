import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TermsAndPrivacyScreen() {
  const navigation = useNavigation();
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Cabeçalho */}
      <Text style={styles.title}>Termo de acordo de uso do utilizador</Text>

      {/* Texto do termo */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          Aceito os termos de acordo utilizador e autorizo o tratamento dos meus dados 
          de acordo com a política de privacidade. O uso deste aplicativo implica na 
          aceitação integral destes termos e no consentimento para o processamento dos 
          meus dados pessoais, conforme previsto nas normas de proteção de dados 
          aplicáveis.
        </Text>
      </ScrollView>

      {/* Checkbox */}
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setAgreed(!agreed)}
      >
        <Ionicons
          name={agreed ? "checkbox-outline" : "square-outline"}
          size={22}
          color="#1b8f55"
        />
        <Text style={styles.checkboxLabel}>
          Li e concordo com os termos de política e privacidade.
        </Text>
      </TouchableOpacity>

      {/* Botão Confirmar */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 20,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: "#444",
    lineHeight: 22,
    textAlign: "justify",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
  confirmButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
