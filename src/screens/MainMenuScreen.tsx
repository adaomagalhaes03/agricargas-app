import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DrawerMenu from "./DrawerMenu";

const mockProducts = [
  { id: "1", name: "Tomates", price: "10.000 Kzs", image: require("../../assets/tomate.png") },
  { id: "2", name: "Cenouras", price: "30.000 Kzs", image: require("../../assets/cenoura.png") },
  { id: "3", name: "Batatas", price: "25.000 Kzs", image: require("../../assets/tomate.png") },
  { id: "4", name: "Alfaces", price: "15.000 Kzs", image: require("../../assets/cenoura.png") },
  { id: "5", name: "Cebolas", price: "18.000 Kzs", image: require("../../assets/tomate.png") },
  { id: "6", name: "Pepinos", price: "20.000 Kzs", image: require("../../assets/cenoura.png") },
];

export default function MainMenuScreen() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Drawer */}
      {drawerOpen && <DrawerMenu onClose={() => setDrawerOpen(false)} />}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AgriMarket</Text>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          placeholder="O que precisas?"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      {/* Title */}
      <Text style={styles.sectionTitle}>Últimas Atualizações</Text>

      {/* Products */}
      <FlatList
        data={mockProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>Desde: {item.price}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addText}>+ Add</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 0.4,
    borderBottomColor: "#ddd",
    elevation: 2,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f4f7",
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 8,
    color: "#000",
    fontSize: 15,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 17,
    marginLeft: 20,
    marginBottom: 10,
    color: "#000",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    padding: 10,
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: "#eee",
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  productName: {
    fontWeight: "bold",
    color: "#000",
    marginTop: 8,
    fontSize: 15,
  },
  productPrice: {
    color: "#666",
    fontSize: 13,
    marginVertical: 4,
  },
  addButton: {
    backgroundColor: "#1b8f55",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginTop: 6,
  },
  addText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
