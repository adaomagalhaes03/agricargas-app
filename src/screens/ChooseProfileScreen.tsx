import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ChooseProfileScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/profile-1.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Qual perfil é o Seu?</Text>
        <Text style={styles.subtitle}>
          Selecione uma das opções{'\n'}para prosseguirmos.
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
              style={[styles.button, styles.companyButton]}
              onPress={() => navigation.navigate("CompanyNIF" as never )}
            >
              <Text style={[styles.buttonText, styles.companyButtonText]}>
                Empresa
              </Text>
</TouchableOpacity>


          <TouchableOpacity
            style={[styles.button, styles.vendorButton]}
            onPress={() => {
              // navegar para a tela do vendedor (cria a rota se ainda não existir)
              navigation.navigate("VendorNIF" as never);
            }}
          >
            <Text style={styles.buttonText}>Vendedor</Text>
          </TouchableOpacity>
        </View>

        {/* Indicador de progresso */}
        <View style={styles.progressContainer}>
          <View style={styles.progressActive} />
          <View style={styles.progressInactive} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 56,
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
    lineHeight: 34,
  },
  subtitle: {
    color: "#e5e5e5",
    textAlign: "center",
    marginBottom: 32,
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 28,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginHorizontal: 8,
    minWidth: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  companyButton: {
    backgroundColor: "#d6f5e0",
  },
  vendorButton: {
    backgroundColor: "#1b8f55",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#000",
  },
  companyButtonText: {
    color: "#000",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  progressActive: {
    width: 80,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#1b8f55",
    marginHorizontal: 6,
  },
  progressInactive: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 6,
  },
});
