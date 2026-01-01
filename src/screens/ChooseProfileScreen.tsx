import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
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
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <View style={styles.overlay} />

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Qual perfil é</Text>
          <Text style={styles.title}>o Seu?</Text>
          
          <Text style={styles.subtitle}>
            Selecione uma das opções
          </Text>
          <Text style={styles.subtitle}>
            para prosseguirmos.
          </Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.companyButton]}
              onPress={() => navigation.navigate("CompanyNIF" as never)}
              activeOpacity={0.85}
            >
              <Text style={styles.companyButtonText}>
                Empresa
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.vendorButton]}
              onPress={() => navigation.navigate("VendorNIF" as never)}
              activeOpacity={0.85}
            >
              <Text style={styles.vendorButtonText}>Vendedor</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomSection}>
          {/* Indicador de progresso */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar} />
          </View>
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
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 100,
    paddingBottom: 50,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 42,
  },
  subtitle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "400",
    marginTop: 4,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    gap: 16,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    minWidth: 140,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  companyButton: {
    backgroundColor: "#B8F5D0",
  },
  vendorButton: {
    backgroundColor: "#1DD87C",
  },
  companyButtonText: {
    fontWeight: "700",
    fontSize: 17,
    color: "#000000",
  },
  vendorButtonText: {
    fontWeight: "700",
    fontSize: 17,
    color: "#FFFFFF",
  },
  bottomSection: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  progressContainer: {
    width: "100%",
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBar: {
    width: "66%",
    height: "100%",
    backgroundColor: "#1DD87C",
    borderRadius: 2,
  },
});