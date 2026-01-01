import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [nome, setNome] = useState("João Silva");
  const [telefone, setTelefone] = useState("923456789");
  const [email, setEmail] = useState("joao.silva@email.com");
  const [nif, setNif] = useState("123456789");
  const [empresa, setEmpresa] = useState("Agricargas Lda");

  const handleSave = () => {
    setIsEditing(false);
    // Aqui você salvaria os dados
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Aqui você restauraria os valores originais
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity onPress={() => setIsEditing(!isEditing)} style={styles.editButton}>
          <Ionicons name={isEditing ? "close" : "pencil"} size={22} color="#1DD87C" />
        </TouchableOpacity>
      </View>

      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle}>
          <Ionicons name="person" size={50} color="#999" />
        </View>
        {isEditing && (
          <TouchableOpacity style={styles.editAvatarButton}>
            <Ionicons name="camera" size={18} color="#1DD87C" />
          </TouchableOpacity>
        )}
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        {/* Nome */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.inputDisabled]}
            value={nome}
            onChangeText={setNome}
            editable={isEditing}
          />
        </View>

        {/* Telefone */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Telefone</Text>
          <View style={styles.phoneContainer}>
            <View style={styles.countryCode}>
              <Image
                source={{ uri: "https://flagcdn.com/w40/ao.png" }}
                style={styles.flag}
              />
              <Text style={styles.phonePrefix}>+244</Text>
            </View>
            <TextInput
              style={[styles.phoneInput, !isEditing && styles.inputDisabled]}
              value={telefone}
              onChangeText={setTelefone}
              keyboardType="phone-pad"
              editable={isEditing}
            />
          </View>
        </View>

        {/* Email */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.inputDisabled]}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={isEditing}
          />
        </View>

        {/* NIF */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>NIF</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.inputDisabled]}
            value={nif}
            onChangeText={setNif}
            editable={isEditing}
          />
        </View>

        {/* Empresa */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Empresa</Text>
          <TextInput
            style={[styles.input, !isEditing && styles.inputDisabled]}
            value={empresa}
            onChangeText={setEmpresa}
            editable={isEditing}
          />
        </View>
      </View>

      {/* Botões de ação */}
      {isEditing && (
        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleCancel}
            activeOpacity={0.85}
          >
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSave}
            activeOpacity={0.85}
          >
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
  },
  editButton: {
    padding: 5,
  },
  avatarContainer: {
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 25,
    position: "relative",
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  editAvatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#1DD87C",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  form: {
    paddingHorizontal: 25,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 6,
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: "#000000",
    borderWidth: 1,
    borderColor: "#F5F5F5",
  },
  inputDisabled: {
    backgroundColor: "#FAFAFA",
    color: "#666666",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingLeft: 12,
    borderWidth: 1,
    borderColor: "#F5F5F5",
  },
  countryCode: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
    borderRightWidth: 1,
    borderRightColor: "#E0E0E0",
  },
  flag: {
    width: 20,
    height: 14,
    marginRight: 5,
  },
  phonePrefix: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "600",
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    color: "#000000",
  },
  actionButtons: {
    flexDirection: "row",
    paddingHorizontal: 25,
    paddingTop: 20,
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButtonText: {
    color: "#666666",
    fontSize: 15,
    fontWeight: "700",
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#1DD87C",
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#1DD87C",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});