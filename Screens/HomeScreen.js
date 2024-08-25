import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export const HomeScreen = () => {
    const navigation = useNavigation();

    const jobs = [
        { id: '1', title: 'Instructor de Desarrollo de Software', company: 'TechEdu Inc.', location: 'Remoto', salary: '$45,000 - $60,000' },
        { id: '2', title: 'Técnico en Mantenimiento Industrial', company: 'IndustrialTech S.A.', location: 'Ciudad Industrial', salary: '$35,000 - $50,000' },
        { id: '3', title: 'Tecnólogo en Gestión de Proyectos', company: 'ProjectPro Ltd.', location: 'Oficina Central', salary: '$40,000 - $55,000' },
    ];

    const renderJob = ({ item }) => (
        <View style={styles.jobItem}>
            <Text style={styles.jobTitle}>{item.title}</Text>
            <Text style={styles.jobCompany}>{item.company}</Text>
            <Text style={styles.jobDetails}>{item.location} | {item.salary}</Text>
            <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Aplicar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={['#4CAF50', '#2E7D32']}
                style={styles.header}
            >
                <View style={styles.headerContent}>
                    <Text style={styles.titleHomeScreen}>Puestos Disponibles</Text>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <FlatList
                data={jobs}
                renderItem={renderJob}
                keyExtractor={item => item.id}
                style={styles.jobList}
                contentContainerStyle={styles.jobListContent}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        padding: 20,
        paddingTop: 40,
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleHomeScreen: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        flex: 1,
    },
    loginButton: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    jobList: {
        flex: 1,
    },
    jobListContent: {
        padding: 15,
    },
    jobItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2E7D32',
        marginBottom: 5,
    },
    jobCompany: {
        fontSize: 16,
        color: '#4CAF50',
        marginBottom: 5,
    },
    jobDetails: {
        fontSize: 14,
        color: '#757575',
        marginBottom: 10,
    },
    applyButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;