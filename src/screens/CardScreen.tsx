import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PaymentModal from "./PaymentModal";

const cartItems = [
  {
    id: "1",
    name: "Tomates",
    price: "10.000 Kzs",
    quantity: 5,
    unit: "g",
    image: require("../../assets/tomate.png"),
  },
  {
    id: "2",
    name: "Tomates",
    price: "10.000 Kzs",
    quantity: 5,
    unit: "g",
    image: require("../../assets/tomate.png"),
  },
  {
    id: "3",
    name: "Tomates",
    price: "10.000 Kzs",
    quantity: 5,
    unit: "g",
    image: require("../../assets/tomate.png"),
  },
  {
    id: "4",
    name: "Tomates",
    price: "10.000 Kzs",
    quantity: 5,
    unit: "g",
    image: require("../../assets/tomate.png"),
  },
  {
    id: "5",
    name: "Tomates",
    price: "10.000 Kzs",
    quantity: 5,
    unit: "g",
    image: require("../../assets/tomate.png"),
  },
];

export default function CartScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const totalItems = cartItems.length;
  const totalPrice = "60mil Kz";

  const handleRemove = (id: string) => {
    console.log("Remover item:", id);
    // Adicionar lógica para remover item
  };

  const handlePayment = () => {
    setModalVisible(false);
    console.log("Pagamento confirmado");
    // Adicionar lógica de pagamento
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Payment Modal */}
      <PaymentModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handlePayment}
        totalAmount={totalPrice}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Carrinho</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Total Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summarySubtitle}>
          {totalItems} itens no carrinho
        </Text>
        <Text style={styles.summaryTotal}>Total: {totalPrice}</Text>
      </View>

      {/* Pay Button */}
      <TouchableOpacity 
        style={styles.payButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.payButtonText}>Pagar Agora</Text>
      </TouchableOpacity>

      {/* Cart Items List */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Preço: {item.price}</Text>
              <Text style={styles.itemQuantity}>
                Quantidade: {item.quantity} {item.unit}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => handleRemove(item.id)}
            >
              <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: "#fff",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  summaryContainer: {
    backgroundColor: "#D4F4E7",
    marginHorizontal: 20,
    marginTop: 10,
    padding: 16,
    borderRadius: 8,
  },
  summarySubtitle: {
    fontSize: 14,
    color: "#2E7D5E",
    marginBottom: 4,
  },
  summaryTotal: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1B5E3F",
  },
  payButton: {
    backgroundColor: "#22C55E",
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 20,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    alignItems: "center",
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 13,
    color: "#666",
    marginBottom: 2,
  },
  itemQuantity: {
    fontSize: 13,
    color: "#666",
  },
  removeButton: {
    backgroundColor: "#FF5722",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
  },
  removeButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});