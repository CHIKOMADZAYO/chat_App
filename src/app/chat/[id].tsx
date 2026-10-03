import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import { colors } from '../../constants/colors'
import { useColorScheme } from 'react-native'

type ChatMessage = {
  id: string
  text: string
  outgoing: boolean
  time: string
}

const ChatScreen = () => {
  const router = useRouter()
  const scrollViewRef = useRef<ScrollView>(null)
  const params = useLocalSearchParams<{
    id?: string
    name?: string
    image?: string
    message?: string
    sentByMe?: string
    online?: string
  }>()
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light
  const name = typeof params.name === 'string' ? params.name : 'Conversation'
  const image = typeof params.image === 'string' ? params.image : undefined
  const initialMessage = typeof params.message === 'string' ? params.message.replace(/^You:\s*/, '') : ''
  const initialOutgoing = params.sentByMe === 'true'
  const isOnline = params.online === 'true'
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(() => initialMessage
    ? [{ id: 'initial', text: initialMessage, outgoing: initialOutgoing, time: formatTime(new Date()) }]
    : [])

  const handleSend = () => {
    const text = draft.trim()
    if (!text) return

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: Date.now().toString(), text, outgoing: true, time: formatTime(new Date()) },
    ])
    setDraft('')
  }

  return (
    <ThemedView style={styles.screen} safeArea>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={[styles.header, { backgroundColor: theme.card, borderBottomColor: theme.border }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back to messages"
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <MaterialIcons name="arrow-back" size={23} color={theme.text} />
        </Pressable>
        {image ? <Image source={{ uri: image }} style={styles.headerAvatar} /> : (
          <View style={[styles.headerAvatar, styles.avatarFallback, { backgroundColor: theme.primarySoft }]}>
            <ThemedText style={[styles.avatarInitial, { color: theme.primary }]}>{name.charAt(0).toUpperCase()}</ThemedText>
          </View>
        )}
        <View style={styles.headerDetails}>
          <ThemedText numberOfLines={1} style={styles.headerName}>{name}</ThemedText>
          <ThemedText style={[styles.presence, { color: isOnline ? theme.success : theme.textMuted }]}>
            {isOnline ? 'Online' : 'Conversation'}
          </ThemedText>
        </View>
        <MaterialIcons name="more-vert" size={23} color={theme.textMuted} />
      </View>

      <KeyboardAvoidingView
        style={styles.chatBody}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          <View style={[styles.dayPill, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <ThemedText style={[styles.dayText, { color: theme.textMuted }]}>TODAY</ThemedText>
          </View>

          {messages.length === 0 ? (
            <View style={[styles.emptyNote, { backgroundColor: theme.card, borderColor: theme.border }]}>
              <ThemedText style={[styles.emptyText, { color: theme.textMuted }]}>Say hello to start the conversation.</ThemedText>
            </View>
          ) : messages.map((message) => (
            <View
              key={message.id}
              style={[
                styles.bubble,
                message.outgoing ? styles.outgoingBubble : styles.incomingBubble,
                {
                  backgroundColor: message.outgoing
                    ? (colorScheme === 'dark' ? '#17452C' : '#D9FDD3')
                    : theme.card,
                  borderColor: message.outgoing
                    ? (colorScheme === 'dark' ? '#23643D' : '#C8EFC1')
                    : theme.border,
                },
              ]}
            >
              <ThemedText style={styles.bubbleText}>{message.text}</ThemedText>
              <View style={styles.bubbleMeta}>
                <ThemedText style={[styles.messageTime, { color: theme.textMuted }]}>{message.time}</ThemedText>
                {message.outgoing && <MaterialIcons name="done-all" size={15} color={theme.primary} />}
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={[styles.composer, { backgroundColor: theme.background }]}>
          <View style={[styles.inputShell, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <TextInput
              value={draft}
              onChangeText={setDraft}
              placeholder="Message"
              placeholderTextColor={theme.textMuted}
              multiline
              maxLength={2000}
              onSubmitEditing={handleSend}
              style={[styles.messageInput, { color: theme.text }]}
            />
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Send message"
            disabled={!draft.trim()}
            onPress={handleSend}
            style={({ pressed }) => [
              styles.sendButton,
              { backgroundColor: draft.trim() ? theme.primary : theme.textMuted },
              pressed && styles.sendPressed,
            ]}
          >
            <MaterialIcons name="send" size={19} color="#FFFFFF" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ThemedView>
  )
}

const formatTime = (date: Date) => date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })

export default ChatScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    paddingHorizontal: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  backButton: {
    width: 34,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E2E8F0',
  },
  avatarFallback: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitial: {
    fontSize: 17,
    fontWeight: '800',
  },
  headerDetails: {
    flex: 1,
    gap: 2,
  },
  headerName: {
    fontSize: 16,
    fontWeight: '700',
  },
  presence: {
    fontSize: 12,
    fontWeight: '500',
  },
  chatBody: {
    flex: 1,
  },
  messagesContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 16,
    gap: 10,
  },
  dayPill: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 8,
  },
  dayText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  emptyNote: {
    alignSelf: 'center',
    maxWidth: '88%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 8,
  },
  emptyText: {
    fontSize: 13,
    textAlign: 'center',
  },
  bubble: {
    maxWidth: '84%',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingTop: 9,
    paddingBottom: 6,
    gap: 4,
  },
  incomingBubble: {
    alignSelf: 'flex-start',
    borderTopLeftRadius: 5,
  },
  outgoingBubble: {
    alignSelf: 'flex-end',
    borderTopRightRadius: 5,
  },
  bubbleText: {
    fontSize: 15,
    lineHeight: 21,
  },
  bubbleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 3,
  },
  messageTime: {
    fontSize: 10,
  },
  composer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 9,
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 8,
  },
  inputShell: {
    flex: 1,
    minHeight: 48,
    maxHeight: 116,
    borderRadius: 24,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  messageInput: {
    minHeight: 24,
    maxHeight: 90,
    fontSize: 15,
    lineHeight: 21,
    paddingTop: 11,
    paddingBottom: 10,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendPressed: {
    opacity: 0.8,
  },
})