import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'



const DashboardLayout = () => {
  return (
    <Tabs
       screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#94A3B8",

     tabBarStyle: {
      position: "absolute",
      left: 20,
      right: 20,
      bottom:7,

      height: 70,

      borderRadius: 20,

      borderTopWidth: 0,

      elevation:2,

      shadowOffset: {
        width: 0,
        height: 4,
      },

      shadowOpacity: 0.15,
      shadowRadius: 10,
    },

      tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >

      <Tabs.Screen name="list" options={{ title: 'List', tabBarIcon: () => <MaterialIcons name="list" size={24} color="#2563EB" /> }} />
      <Tabs.Screen name="create" options={{ title: 'Create', tabBarIcon: () => <MaterialIcons name="add" size={24} color="#2563EB" /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: () => <MaterialIcons name="person-outline" size={24} color="#2563EB" /> }} />
    </Tabs>
    
  )
}

export default DashboardLayout

const styles = StyleSheet.create({
  
})