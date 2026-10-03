import { useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../../constants/colors'


const DashboardLayout = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textMuted,
        tabBarStyle: {
          position: 'absolute',
          left: 18,
          right: 18,
          bottom: 12,
          height: 70,
          paddingTop: 6,
          paddingBottom: 6,
          backgroundColor: theme.card,
          borderRadius: 22,
          borderWidth: 1,
          borderColor: theme.border,
          elevation: 8,
          shadowColor: '#0F172A',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.12,
          shadowRadius: 14,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="list"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => <MaterialIcons name="chat-bubble-outline" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'New chat',
          tabBarIcon: ({ color }) => <MaterialIcons name="edit" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialIcons name="person-outline" size={23} color={color} />,
        }}
      />
    </Tabs>
  )
}

export default DashboardLayout