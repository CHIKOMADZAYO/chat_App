import { StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <Stack screenOptions={{ headerShown: false, animation: 'none' }} />
        
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})