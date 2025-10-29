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
import { useNavigation } from "@react-navigation/native";

const mockProducts = [
  { 
    id: "1", 
    name: "Tomates", 
    price: "10.000 Kzs", 
    image: require("../../assets/tomate.png"),
    size: "232 x 143",
    rating: 4,
    reviews: 5
  },
  { 
    id: "2", 
    name: "Cenouras", 
    price: "30.000 Kzs", 
    image: require("../../assets/cenoura.png"),
    badge: "Mais Vendido",
    rating: 5,
    reviews: 5
  },
  { 
    id: "3", 
    name: "Cenouras", 
    price: "30.000 Kzs", 
    image: require("../../assets/cenoura.png"),
    badge: "Mais Vendido",
    rating: 5,
    reviews: 5
  },
  { 
    id: "4", 
    name: "Cenouras", 
    price: "30.000 Kzs", 
    image: require("../../assets/cenoura.png"),
    badge: "Mais Vendido",
    rating: 5,
    reviews: 5
  },
];

export default function MainMenuScreen() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigation = useNavigation();

  const renderStars = (rating: number, total: number = 5) => {
    return (
      <View style={styles.starsContainer}>
        {[...Array(total)].map((_, index) => (
          <Ionicons
            key={index}
            name="star"
            size={12}
            color={index < rating ? "#FFD700" : "#ddd"}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Drawer */}
      {drawerOpen && <DrawerMenu onClose={() => setDrawerOpen(false)} />}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Ionicons name="menu" size={28} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart' as never)}
        >
          <Ionicons name="cart-outline" size={28} color="#666" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>32</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput
          placeholder="O que precisas"
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
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.productImage} />
              {item.size && (
                <View style={styles.sizeOverlay}>
                  <Text style={styles.sizeText}>{item.size}</Text>
                </View>
              )}
              {item.badge && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.badge}</Text>
                </View>
              )}
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>Desde: {item.price}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingLabel}>Avaliação:</Text>
                {renderStars(item.rating, item.reviews)}
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 100 }}
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
  },
  cartButton: {
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    right: -8,
    top: -6,
    backgroundColor: "#FF6B6B",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    borderRadius: 25,
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 15,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#000",
    fontSize: 15,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 15,
    color: "#000",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 6,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 140,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  sizeOverlay: {
    position: "absolute",
    bottom: 8,
    left: 8,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  sizeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "500",
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#4CAF50",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 15,
    marginBottom: 4,
  },
  productPrice: {
    color: "#4CAF50",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingLabel: {
    fontSize: 11,
    color: "#666",
    marginRight: 6,
  },
  starsContainer: {
    flexDirection: "row",
    gap: 2,
  },
});