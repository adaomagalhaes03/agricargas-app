import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

interface UploadProofModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (file: any) => void;
}

export default function UploadProofModal({
  visible,
  onClose,
  onConfirm,
}: UploadProofModalProps) {
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "image/*"],
        copyToCacheDirectory: true,
      });

      if (result.canceled === false && result.assets && result.assets[0]) {
        setSelectedFile(result.assets[0]);
        console.log("Arquivo selecionado:", result.assets[0].name);
      }
    } catch (error) {
      console.error("Erro ao selecionar arquivo:", error);
      Alert.alert("Erro", "Não foi possível selecionar o arquivo");
    }
  };

  const handleConfirm = () => {
    if (selectedFile) {
      onConfirm(selectedFile);
      setSelectedFile(null);
    } else {
      Alert.alert("Atenção", "Por favor, selecione um comprovativo");
    }
  };

  const handleClose = () => {
    setSelectedFile(null);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Icon */}
          <View style={styles.iconContainer}>
            <Ionicons name="document-text-outline" size={50} color="#22C55E" />
          </View>

          {/* Title */}
          <Text style={styles.title}>Comprovativo</Text>

          {/* Description */}
          <Text style={styles.description}>
            Carregue aqui o comprovativo do do serviço solicitado em PDF
          </Text>

          {/* Upload Area */}
          <TouchableOpacity
            style={styles.uploadArea}
            onPress={pickDocument}
            activeOpacity={0.7}
          >
            <Ionicons name="cloud-upload-outline" size={40} color="#999" />
            <Text style={styles.uploadText}>
              {selectedFile ? selectedFile.name : "Carregar comprovativo"}
            </Text>
            {selectedFile && (
              <View style={styles.fileInfo}>
                <Ionicons name="checkmark-circle" size={20} color="#22C55E" />
                <Text style={styles.fileInfoText}>Arquivo selecionado</Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>Fazer Pagamento</Text>
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
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
    width: 90,
    height: 90,
    backgroundColor: "#E8F8F0",
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 12,
  },
  description: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  uploadArea: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#E5E7EB",
    borderStyle: "dashed",
    borderRadius: 12,
    padding: 32,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#F9FAFB",
  },
  uploadText: {
    fontSize: 14,
    color: "#999",
    marginTop: 12,
    textAlign: "center",
  },
  fileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    gap: 6,
  },
  fileInfoText: {
    fontSize: 12,
    color: "#22C55E",
    fontWeight: "600",
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