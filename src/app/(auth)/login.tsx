import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import ThemedButton from '../components/ThemedButton'
import ThemedTextInput from '../components/ThemedTextInput'

const login = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login Button pressed', { email, password })
    router.replace('/')
  }

  return (
    <ThemedView style={styles.container}>
      <View style={styles.card}>
        <ThemedText style={styles.eyebrow}>Welcome back</ThemedText>
        <ThemedText style={styles.title}>Login</ThemedText>

        <Spacer height={24} />

        <ThemedTextInput
          text={email}
          placeholder="Email"
          style={styles.input}
          onChangeText={setEmail}
        />

        <Spacer height={12} />

        <ThemedTextInput
          text={password}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
        />

        <View style={styles.metaRow}>
          <ThemedText style={styles.helperText}>Remember me</ThemedText>
          <ThemedText style={styles.linkText}>Forgot password?</ThemedText>
        </View>

        <Spacer height={18} />

        <ThemedButton onPress={handleLogin}>
          <ThemedText style={styles.buttonText}>Login</ThemedText>
        </ThemedButton>

        <Spacer height={18} />

        <Link href="/(auth)/register" style={styles.footerText}>
          <ThemedText style={styles.footerText}>Don’t have an account? Register</ThemedText>
        </Link>
      </View>
    </ThemedView>
  )
}

export default login

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 24,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 6,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: '#2563EB',
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.7,
  },
  input: {
    marginBottom: 0,
    backgroundColor: '#F8FAFC',
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 4,
  },
  helperText: {
    fontSize: 13,
    color: '#475569',
  },
  linkText: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '700',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  footerText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#2563EB',
    fontWeight: '700',
  },
})