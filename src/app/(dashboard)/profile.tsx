import { StyleSheet, View } from 'react-native'
import ThemedView from '../components/ThemedView'
import { Link } from 'expo-router'
import ThemedText from '../components/ThemedText'
import ThemedCard from '../components/ThemedCard'

const profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.avatar}>JD</ThemedText>
        <ThemedText style={styles.name}>Jordan Doe</ThemedText>
        <ThemedText style={styles.email}>jordan@nova.app</ThemedText>

        <View style={styles.infoRow}>
          <ThemedText style={styles.label}>Plan</ThemedText>
          <ThemedText style={styles.value}>Pro</ThemedText>
        </View>

        <View style={styles.infoRow}>
          <ThemedText style={styles.label}>Status</ThemedText>
          <ThemedText style={styles.value}>Online</ThemedText>
        </View>

        <Link href="/" style={styles.link}>
          <ThemedText style={styles.linkText}>Back home</ThemedText>
        </Link>
      </ThemedCard>
    </ThemedView>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    padding: 24,
    alignItems: 'center',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#DBEAFE',
    color: '#1D4ED8',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 18,
  },
  infoRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  label: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '600',
  },
  value: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '700',
  },
  link: {
    marginTop: 18,
  },
  linkText: {
    fontSize: 15,
    color: '#2563EB',
    fontWeight: '700',
  },
})