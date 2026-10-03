import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { Children } from 'react'
import { colors } from '../../constants/colors'


type ThemedButtonProps = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  color?: string
  onPress?: () => void
}

const ThemedButton = ({ style, children, color=colors.primary, onPress}: ThemedButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressedButton,
        style,
      ]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  )
}
export default ThemedButton

const styles = StyleSheet.create({
   button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
   },

    pressedButton:{
        opacity:0.5
    }
})
