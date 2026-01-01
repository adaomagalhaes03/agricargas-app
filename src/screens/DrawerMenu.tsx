import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Profile: undefined;
  PurchaseHistory: undefined;
  ValidateProvider: undefined;
  Help: undefined;
  Login: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function DrawerMenu({ onClose }: { onClose: () => void }) {
  const navigation = useNavigation<NavigationProp>();
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // animação de entrada e saída
  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => onClose());
  };

  const handleNavigate = (screen: keyof RootStackParamList) => {
    handleClose();
    setTimeout(() => {
      navigation.navigate(screen);
    }, 300);
  };

  const handleExit = () => {
    handleClose();
    setTimeout(() => {
      navigation.navigate("Login");
    }, 300);
  };

  return (
    <Animated.View
      style={[
        styles.overlay,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <TouchableOpacity 
        style={StyleSheet.absoluteFill} 
        activeOpacity={1} 
        onPress={handleClose}
      />
      
      <Animated.View
        style={[
          styles.drawer,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <SafeAreaView style={{ flex: 1 }}>
          {/* Botão Voltar */}
          <TouchableOpacity onPress={handleClose} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#000" />
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>

          {/* Itens do Menu */}
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => handleNavigate("Profile")}>
              <Text style={styles.menuItem}>PERFIL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("PurchaseHistory")}>
              <Text style={styles.menuItem}>HISTÓRICO DE COMPRA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("ValidateProvider")}>
              <Text style={styles.menuItem}>VALIDAR PRESTADOR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigate("Help")}>
              <Text style={styles.menuItem}>AJUDA</Text>
            </TouchableOpacity>
          </View>

          {/* Botão Sair */}
          <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
            <Ionicons name="exit-outline" size={18} color="red" />
            <Text style={styles.exitText}>SAIR DA APLICAÇÃO</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 9,
  },
  drawer: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "75%",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 70,
    zIndex: 10,
    elevation: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#000",
    fontWeight: "700",
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    fontWeight: "700",
    color: "#001f3f",
    fontSize: 16,
    marginBottom: 26,
    marginLeft: 10,
  },
  exitButton: {
    position: "absolute",
    bottom: 40,
    left: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  exitText: {
    color: "red",
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 6,
  },
});