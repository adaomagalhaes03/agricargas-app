import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function WhoUsingScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require("../../assets/profile-2.png")} 
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      
      <View style={styles.overlay} />

      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>
            QUEM ESTÁ
          </Text>
          <Text style={styles.title}>
            <Text style={styles.highlight}>USANDO</Text> A NOSSA
          </Text>
          <Text style={styles.title}>
            APLICAÇÃO?
          </Text>
          
          <Text style={styles.subtitle}>
            Segue algumas instruções simples e vamos
          </Text>
          <Text style={styles.subtitle}>
            construir o seu perfil agricargas!
          </Text>
        </View>

        <View style={styles.bottomSection}>
          {/* Botão Avançar */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ChooseProfile")}
            activeOpacity={0.85}
          >
            <Text style={styles.buttonText}>Avançar →</Text>
          </TouchableOpacity>

          {/* Barra de progresso */}
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
    width: "100%",
    height: "100%",
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
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 40,
    letterSpacing: 1,
  },
  highlight: {
    color: "#1DD87C",
  },
  subtitle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "400",
    marginTop: 4,
  },
  bottomSection: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: "#1DD87C",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
  progressContainer: {
    width: "100%",
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressBar: {
    width: "50%",
    height: "100%",
    backgroundColor: "#1DD87C",
    borderRadius: 2,
  },
});