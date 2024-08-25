import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';

import HomeScreen from './Screens/HomeScreen'; 
import SettingScreen from './Screens/SettingScreen'; 
import StackScreen from './Screens/StackScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';

const HomeStackNavigator = createNativeStackNavigator(); 
const Tab = createBottomTabNavigator(); 


function MyStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen}/>  
            <HomeStackNavigator.Screen name="Login" component={LoginScreen}/>
            <HomeStackNavigator.Screen name="Register" component={RegisterScreen}/>
            <HomeStackNavigator.Screen name="Stack" component={StackScreen}/>
        </HomeStackNavigator.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
        }}>
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={24} color={'Black'} />
                    ),
                    tabBarBadge: 3, 
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={SettingScreen}
                options={{
                    tabBarLabel:"Settings",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="setting" size={24} color={'Black'} />
                    ),
                    tabBarBadge: 3, 
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}
