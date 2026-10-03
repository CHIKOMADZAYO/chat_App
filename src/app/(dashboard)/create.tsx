import { Image, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import { colors } from '../../constants/colors'
import { useColorScheme } from 'react-native'

const contacts = [
  {
    name: 'Sophie Chen',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces',
  },
  {
    name: 'Marcus Williams',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces',
  },
  {
    name: 'Amara Johnson',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop&crop=faces',
  },
  {
    name: 'Daniel Kim',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=faces',
  },
  {
    name: 'Olivia Martinez',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=160&h=160&fit=crop&crop=faces',
  },
]

const Create = () => {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')
  const [recipient, setRecipient] = useState<(typeof contacts)[number] | null>(null)
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase()),
  )
  const canStartChat = recipient !== null && message.trim().length > 0

  const handleStartChat = () => {
    if (!recipient || !message.trim()) return

    router.replace({
      pathname: '/(dashboard)/list',
      params: {
        name: recipient.name,
        message: message.trim(),
        image: recipient.image,
      },
    })
  }

  return (
    <ThemedView style={styles.container} safeArea>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <ThemedText style={[styles.eyebrow, { color: theme.primary }]}>COMPOSE</ThemedText>
        <ThemedText style={styles.title}>New chat</ThemedText>
        <ThemedText style={[styles.subtitle, { color: theme.textMuted }]}>Choose someone and say hello.</ThemedText>

        <ThemedText style={styles.sectionTitle}>Find a person</ThemedText>
        <ThemedTextInput
          text={search}
          placeholder="Search contacts"
          style={styles.searchInput}
          onChangeText={setSearch}
        />

        <View style={styles.contactList}>
          {filteredContacts.length > 0 ? filteredContacts.map((contact) => {
            const isSelected = recipient?.name === contact.name

            return (
              <Pressable
                key={contact.name}
                onPress={() => setRecipient(contact)}
                style={[
                  styles.contactRow,
                  {
                    backgroundColor: isSelected ? theme.primarySoft : theme.card,
                    borderColor: isSelected ? theme.primary : theme.border,
                  },
                ]}
              >
                <Image source={{ uri: contact.image }} style={styles.avatar} />
                <ThemedText style={styles.contactName}>{contact.name}</ThemedText>
                <View style={[styles.radio, isSelected && { borderColor: theme.primary, backgroundColor: theme.primary }]}>
                  {isSelected && <View style={styles.radioDot} />}
                </View>
              </Pressable>
            )
          }) : (
            <ThemedText style={[styles.emptyText, { color: theme.textMuted }]}>No contacts match that search.</ThemedText>
          )}
        </View>

        <ThemedText style={styles.sectionTitle}>Your first message</ThemedText>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder={recipient ? `Message ${recipient.name}` : 'Select someone to start writing'}
          placeholderTextColor={theme.textMuted}
          multiline
          textAlignVertical="top"
          style={[
            styles.messageInput,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
              color: theme.text,
            },
          ]}
        />

        <Pressable
          accessibilityRole="button"
          accessibilityState={{ disabled: !canStartChat }}
          disabled={!canStartChat}
          onPress={handleStartChat}
          style={({ pressed }) => [
            styles.submitButton,
            { backgroundColor: canStartChat ? theme.primary : theme.border },
            pressed && canStartChat && styles.pressedButton,
          ]}
        >
          <ThemedText style={styles.submitText}>Start conversation</ThemedText>
        </Pressable>
      </ScrollView>
    </ThemedView>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 32,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  title: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 6,
    marginBottom: 26,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },
  searchInput: {
    marginBottom: 14,
  },
  contactList: {
    gap: 8,
    marginBottom: 24,
  },
  contactRow: {
    minHeight: 66,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 12,
    borderRadius: 15,
    borderWidth: 1,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E2E8F0',
  },
  contactName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
  },
  radio: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
  },
  radioDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  emptyText: {
    paddingVertical: 18,
    fontSize: 14,
  },
  messageInput: {
    minHeight: 120,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 18,
  },
  submitButton: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  pressedButton: {
    opacity: 0.88,
  },
})