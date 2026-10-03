import { View, useColorScheme, type StyleProp, type ViewStyle } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors } from '../../constants/colors'

type ThemedViewProps = {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  safeArea?: boolean
}

const ThemedView = ({ style, children, safeArea = true }: ThemedViewProps) => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'dark' ? colors.dark : colors.light
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        {
          flex: 1,
          backgroundColor: theme.background,
          paddingTop: safeArea ? insets.top : 0,
          paddingBottom: safeArea ? insets.bottom : 0,
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

export default ThemedView