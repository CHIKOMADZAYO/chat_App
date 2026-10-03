import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useColorScheme } from 'react-native'
import ThemedView from './components/ThemedView'
import ThemedText from './components/ThemedText'
import { colors } from '../constants/colors'
import Spacer from './components/Spacer'

const Home = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={[styles.title, { color: theme.text }]}>Welcome</ThemedText>

      <Spacer style={{ marginBottom: 20 }}>
        <Link href="/about" style={[styles.link, { color: theme.primary }]}>
          <ThemedText>About Page</ThemedText>
        </Link>
      </Spacer>

      <Link href="/contact" style={[styles.link, { color: theme.secondary }]}>
        <ThemedText>Contact Page</ThemedText>
      </Link>

      <Spacer height={40} />

      <Link href="/(auth)/login" style={[styles.link, { color: theme.primary }]}>
        <ThemedText>Login</ThemedText>
      </Link>

      <Link href="/(auth)/register" style={[styles.link, { color: theme.secondary }]}>
        <ThemedText>Register</ThemedText>
      </Link>
      <Link href="/(dashboard)/profile" style={[styles.link, { color: theme.secondary }]}>
        <ThemedText>Profile</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    marginTop: 20,
  },
})