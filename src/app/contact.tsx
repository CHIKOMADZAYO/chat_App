import { StyleSheet, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedCard from '../components/ThemedCard'
import ThemedText from '../components/ThemedText'
import { colors } from '../constants/colors'

const Contact = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  return (
    <ThemedView style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={[styles.eyebrow, { color: theme.primary }]}>Contact</ThemedText>
        <ThemedText style={styles.title}>Let’s build something amazing.</ThemedText>

        <View style={styles.infoBox}>
          <ThemedText style={styles.label}>Email</ThemedText>
          <ThemedText style={[styles.value, { color: theme.primary }]}>hello@nova.app</ThemedText>
        </View>

        <View style={styles.infoBox}>
          <ThemedText style={styles.label}>Location</ThemedText>
          <ThemedText style={styles.value}>Remote • Worldwide</ThemedText>
        </View>

        <Link href="/" style={[styles.link, { color: theme.primary }]}>Back home</Link>
      </ThemedCard>
    </ThemedView>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    padding: 24,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.8,
    marginBottom: 18,
    color: '#0F172A',
  },
  infoBox: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#64748B',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },
  link: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 12,
  },
})