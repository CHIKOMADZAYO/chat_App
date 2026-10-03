import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'

type ThemedButtonProps = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  color?: string
  onPress?: () => void
}

const ThemedButton = ({ style, children, color = colors.primary, onPress }: ThemedButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: color },
        pressed && styles.pressedButton,
        style,
      ]}
    >
      {children}
    </Pressable>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 16,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 4,
  },
  pressedButton: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
})
