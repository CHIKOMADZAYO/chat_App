import { View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native'
import React from 'react'

type SpacerProps = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  height?: number
}

const Spacer = ({ style, children, height = 40 }: SpacerProps) => {
  return <View style={[styles.spacer, { height }, style]}>{children}</View>
}

export default Spacer

const styles = StyleSheet.create({
  spacer: {
    width: '100%',
  },
})