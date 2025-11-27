import React, { useEffect, useRef } from "react";
import { 
  View, 
  Text, 
  ImageBackground, 
  StyleSheet, 
  ActivityIndicator,
  Animated 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NextStepScreen() {
  const navigation = useNavigation();
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação da barra de progresso
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    // Timer para navegar
    const timer = setTimeout(() => {
      navigation.navigate("MainMenu");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <ImageBackground
      source={require("../../assets/load.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Spinner loader */}
        <ActivityIndicator size="large" color="#fff" />
        
        {/* Texto */}
        <Text style={styles.text}>
          Estamos{'\n'}preparando tudo{'\n'}para si!
        </Text>
      </View>

      {/* Barra de progresso na parte inferior */}
      <View style={styles.progressBarContainer}>
        <Animated.View 
          style={[
            styles.progressBar,
            { width: progressWidth }
          ]} 
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 24,
    lineHeight: 36,
  },
  progressBarContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    height: 6,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#22C55E",
    borderRadius: 3,
  },
});