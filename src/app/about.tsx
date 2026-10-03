import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useColorScheme } from 'react-native'
import ThemedView from '../components/ThemedView'
import { colors } from '../constants/colors'
import ThemedText from '../components/ThemedText'
import ThemedCard from '../components/ThemedCard'

const About = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light

  return (
    <ThemedView style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={[styles.eyebrow, { color: theme.primary }]}>About</ThemedText>
        <ThemedText style={styles.title}>A cleaner way to connect.</ThemedText>
        <ThemedText style={[styles.body, { color: theme.textMuted }]}>Nova is designed to keep daily work intuitive, focused, and visually calm. We help people move from ideas to action without friction.</ThemedText>

        <View style={styles.featureList}>
          <ThemedText style={styles.feature}>• Simple account flow</ThemedText>
          <ThemedText style={styles.feature}>• Clear dashboard experience</ThemedText>
          <ThemedText style={styles.feature}>• Premium, modern interface</ThemedText>
        </View>

        <Link href="/" style={[styles.link, { color: theme.primary }]}>Back home</Link>
      </ThemedCard>
    </ThemedView>
  )
}

export default About

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
    marginBottom: 8,
    color: '#0F172A',
  },
  body: {
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 18,
  },
  featureList: {
    gap: 10,
    marginBottom: 18,
  },
  feature: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
  link: {
    fontSize: 16,
    fontWeight: '700',
  },
})

