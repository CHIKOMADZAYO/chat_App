import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import { colors } from '../../constants/colors'
import { useColorScheme } from 'react-native'

const conversations = [
  {
    name: 'Sophie Chen',
    message: 'That sounds perfect. See you there!',
    time: '2m',
    unread: 2,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces',
    online: true,
  },
  {
    name: 'Marcus Williams',
    message: 'Sent over the latest designs',
    time: '18m',
    unread: 1,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces',
    online: true,
  },
  {
    name: 'Amara Johnson',
    message: 'Are we still on for this weekend?',
    time: '1h',
    unread: 0,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop&crop=faces',
    online: false,
  },
  {
    name: 'Daniel Kim',
    message: 'Thanks! I’ll take a look tonight.',
    time: '3h',
    unread: 0,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=faces',
    online: false,
  },
  {
    name: 'Olivia Martinez',
    message: 'You: Just shared the photos',
    time: 'Yesterday',
    unread: 0,
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=160&h=160&fit=crop&crop=faces',
    online: false,
  },
]

const List = () => {
  const params = useLocalSearchParams<{ name?: string; message?: string; image?: string }>()
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light
  const createdConversation = params.name && params.message && params.image
    ? {
        name: params.name,
        message: params.message,
        time: 'Now',
        unread: 0,
        image: params.image,
        online: false,
      }
    : null
  const visibleConversations = createdConversation
    ? [createdConversation, ...conversations.filter((conversation) => conversation.name !== createdConversation.name)]
    : conversations
  const unreadCount = visibleConversations.reduce((total, conversation) => total + conversation.unread, 0)

  return (
    <ThemedView style={styles.container} safeArea>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.header, { borderBottomColor: theme.border }]}>
          <View>
            <ThemedText style={[styles.eyebrow, { color: theme.textMuted }]}>YOUR INBOX</ThemedText>
            <ThemedText style={styles.title}>Messages</ThemedText>
            <ThemedText style={[styles.subtitle, { color: theme.textMuted }]}>Stay connected with your people</ThemedText>
          </View>
          <View style={[styles.countBadge, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <View style={[styles.countDot, { backgroundColor: unreadCount > 0 ? theme.primary : theme.success }]} />
            <ThemedText style={[styles.countText, { color: theme.text }]}>
              {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up'}
            </ThemedText>
          </View>
        </View>

        <ThemedText style={[styles.sectionTitle, { color: theme.textMuted }]}>RECENT CONVERSATIONS</ThemedText>

        <View style={[styles.list, { backgroundColor: theme.card, borderColor: theme.border }]}>
          {visibleConversations.map((conversation, index) => (
            <View
              key={conversation.name}
              style={[
                styles.conversation,
                index < visibleConversations.length - 1 && { borderBottomColor: theme.border, borderBottomWidth: StyleSheet.hairlineWidth },
              ]}
            >
              <View style={styles.avatarWrap}>
                <Image source={{ uri: conversation.image }} style={styles.avatar} />
                {conversation.online && <View style={styles.onlineDot} />}
              </View>

              <View style={styles.conversationCopy}>
                <View style={styles.nameRow}>
                  <ThemedText style={styles.name}>{conversation.name}</ThemedText>
                  <ThemedText style={[styles.time, { color: theme.textMuted }]}>{conversation.time}</ThemedText>
                </View>
                <View style={styles.messageRow}>
                  <ThemedText numberOfLines={1} style={[styles.message, { color: theme.textMuted }]}>
                    {conversation.message}
                  </ThemedText>
                  {conversation.unread > 0 && (
                    <View style={[styles.unreadBadge, { backgroundColor: theme.primary }]}>
                      <ThemedText style={styles.unreadText}>{conversation.unread}</ThemedText>
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ThemedView>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    paddingBottom: 20,
    marginBottom: 22,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 18,
    marginTop: 3,
  },
  countBadge: {
    borderRadius: 999,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  countDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  countText: {
    fontSize: 11,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 12,
  },
  list: {
    borderRadius: 22,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  conversation: {
    minHeight: 88,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    paddingVertical: 14,
  },
  avatarWrap: {
    width: 54,
    height: 54,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#E2E8F0',
  },
  onlineDot: {
    position: 'absolute',
    width: 13,
    height: 13,
    right: 0,
    bottom: 0,
    borderRadius: 7,
    backgroundColor: '#22C55E',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  conversationCopy: {
    flex: 1,
    minWidth: 0,
    gap: 6,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
  },
  time: {
    fontSize: 11,
    fontWeight: '600',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  message: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
  },
  unreadBadge: {
    minWidth: 20,
    height: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
})