import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { colors } from '../constants/colors'
import { UserContext } from './context/userContext'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  return (
    <UserContext.Provider value={{ user: null, setUser: () => {}, login: async () => {}, logout: async () => {}, register: async () => {} }}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.text,
          headerTitleStyle: {
            fontWeight: 'light',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: true }} />
        <Stack.Screen name="about" options={{ headerShown: true }} />
        <Stack.Screen name="contact" options={{ headerShown: true }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
    </UserContext.Provider>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
  },
})