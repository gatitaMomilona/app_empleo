import React from 'react';
import { Text, View, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Redirige al usuario al LoginScreen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ajustes</Text>
      </View>
      
      <ScrollView style={styles.settingsList}>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notificaciones</Text>
          <Switch />
        </View>

        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Modo oscuro</Text>
          <Switch />
        </View>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Privacidad</Text>
          <Ionicons name="chevron-forward" size={24} color="#006400" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Idioma</Text>
          <Ionicons name="chevron-forward" size={24} color="#006400" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Preferencias de búsqueda</Text>
          <Ionicons name="chevron-forward" size={24} color="#006400" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Cuenta</Text>
          <Ionicons name="chevron-forward" size={24} color="#006400" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    backgroundColor: '#006400',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  settingsList: {
    padding: 10,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  settingText: {
    fontSize: 16,
    color: '#333333',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SettingsScreen;
