import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'
import ThemedButton from '../components/ThemedButton'
import ThemedTextInput from '../components/ThemedTextInput'

const register = () => {
  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleCreateAccount = () => {
    console.log('Create Account Button pressed', { email, password })
    router.replace('/')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ThemedView style={styles.container}>
        <View style={styles.card}>
          <ThemedText style={styles.eyebrow}>Create your account</ThemedText>
          <ThemedText style={styles.title}>Register</ThemedText>

          <Spacer height={24} />

          <ThemedTextInput text={email} placeholder="Email" style={styles.input} onChangeText={setEmail} />
          <Spacer height={12} />
          <ThemedTextInput text={password} placeholder="Password" secureTextEntry style={styles.input} onChangeText={setPassword} />
          <Spacer height={12} />
          <ThemedTextInput text={password} placeholder="Confirm Password" secureTextEntry style={styles.input} onChangeText={setPassword} />

          <View style={styles.metaRow}>
            <ThemedText style={styles.helperText}>Secure access</ThemedText>
            <ThemedText style={styles.helperText}>2 min setup</ThemedText>
          </View>

          <Spacer height={18} />

          <ThemedButton onPress={handleCreateAccount}>
            <ThemedText style={styles.buttonText}>Create Account</ThemedText>
          </ThemedButton>

          <Spacer height={18} />

          <Link href="/(auth)/login" style={styles.footerText}>
            <ThemedText style={styles.footerText}>Already have an account? Login</ThemedText>
          </Link>
        </View>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default register

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
    marginTop: 14,
    marginBottom: 4,
  },
  helperText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
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