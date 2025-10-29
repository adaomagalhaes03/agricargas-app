import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import UploadProofModal from "./UploadProofModal";

interface PaymentModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  totalAmount: string;
}

export default function PaymentModal({
  visible,
  onClose,
  onConfirm,
  totalAmount,
}: PaymentModalProps) {
  const [uploadModalVisible, setUploadModalVisible] = useState(false);

  const handlePaymentClick = () => {
    setUploadModalVisible(true);
  };

  const handleUploadConfirm = (file: any) => {
    console.log("Comprovativo enviado:", file);
    setUploadModalVisible(false);
    onConfirm();
  };

  const handleCloseUpload = () => {
    setUploadModalVisible(false);
  };
  return (
    <>
      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={onClose}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            {/* Icon */}
            <View style={styles.iconContainer}>
              <Ionicons name="wallet-outline" size={60} color="#22C55E" />
            </View>

            {/* Title */}
            <Text style={styles.title}>Pagamento</Text>

            {/* IBAN */}
            <Text style={styles.iban}>Iban:0040.0000.5312.5104.1015.9</Text>

            {/* Description */}
            <Text style={styles.description}>
              Esse é o iban em que deve realizar a transferência do pagamento do
              serviço solicitado
            </Text>

            {/* Amount */}
            <Text style={styles.amount}>Total: {totalAmount}</Text>

            {/* Confirm Button */}
            <TouchableOpacity 
              style={styles.confirmButton} 
              onPress={() => setUploadModalVisible(true)}
            >
              <Text style={styles.confirmButtonText}>Fazer Pagamento</Text>
            </TouchableOpacity>

            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Upload Modal */}
      <UploadProofModal
        visible={uploadModalVisible}
        onClose={handleCloseUpload}
        onConfirm={handleUploadConfirm}
      />
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#E8F8F0",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  iban: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#22C55E",
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: "#22C55E",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  confirmButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButton: {
    paddingVertical: 10,
  },
  closeButtonText: {
    color: "#666",
    fontSize: 14,
  },
});