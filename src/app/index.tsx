import { StyleSheet, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedCard from '../components/ThemedCard'
import { colors } from '../constants/colors'

const Home = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  return (
    <ThemedView style={styles.container}>
      <View style={styles.topBar}>
        <ThemedText style={styles.brand}>Nova</ThemedText>
        <Link href="/(dashboard)/profile" style={[styles.pill, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <ThemedText style={[styles.pillText, { color: theme.primary }]}>Profile</ThemedText>
        </Link>
      </View>

      <ThemedCard style={styles.heroCard}>
        <ThemedText style={[styles.eyebrow, { color: theme.primary }]}>Welcome back</ThemedText>
        <ThemedText style={styles.title}>Build momentum with a smarter daily flow.</ThemedText>
        <ThemedText style={[styles.subtitle, { color: theme.textMuted }]}>Track tasks, stay connected, and make every interaction feel effortless.</ThemedText>

        <View style={styles.metricRow}>
          <View style={[styles.metric, { backgroundColor: theme.primarySoft }]}>
            <ThemedText style={[styles.metricValue, { color: theme.primary }]}>24</ThemedText>
            <ThemedText style={[styles.metricLabel, { color: theme.textMuted }]}>Updates</ThemedText>
          </View>
          <View style={[styles.metric, { backgroundColor: theme.cardAlt }]}>
            <ThemedText style={[styles.metricValue, { color: theme.primary }]}>12</ThemedText>
            <ThemedText style={[styles.metricLabel, { color: theme.textMuted }]}>Shared</ThemedText>
          </View>
        </View>
      </ThemedCard>

      <View style={styles.linkStack}>
        <Link href="/(auth)/login" style={[styles.primaryLink, { backgroundColor: theme.primary }]}>
          <ThemedText style={styles.linkText}>Login</ThemedText>
        </Link>

        <Link href="/(auth)/register" style={[styles.secondaryLink, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <ThemedText style={[styles.linkText, { color: theme.primary }]}>Create account</ThemedText>
        </Link>
      </View>

      <View style={styles.footerRow}>
        <Link href="/about" style={[styles.textLink, { color: theme.primary }]}>About</Link>
        <Link href="/contact" style={[styles.textLink, { color: theme.primary }]}>Contact</Link>
      </View>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 32,
    justifyContent: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  brand: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  pill: {
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  heroCard: {
    padding: 22,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  eyebrow: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: 1.4,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '800',
    letterSpacing: -0.9,
    marginBottom: 10,
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 18,
  },
  metricRow: {
    flexDirection: 'row',
    gap: 12,
  },
  metric: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '800',
  },
  metricLabel: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '600',
  },
  linkStack: {
    gap: 12,
  },
  primaryLink: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.22,
    shadowRadius: 16,
    elevation: 4,
  },
  secondaryLink: {
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignItems: 'center',
    borderWidth: 1,
  },
  linkText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#FFFFFF',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 18,
    marginTop: 20,
  },
  textLink: {
    fontSize: 15,
    fontWeight: '700',
  },
})