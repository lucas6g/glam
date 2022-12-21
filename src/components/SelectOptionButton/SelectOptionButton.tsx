import { LinearGradient } from 'expo-linear-gradient'
import React, { ReactNode } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { RectButtonProperties } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'
import { Container, ButtonText } from './SelectOptionButtonStyles'

interface SelectOptionButtonProps extends RectButtonProperties {
  children: ReactNode
  onPress?: () => void
  enabled?: boolean
  loading?: boolean
  textColor?: string
  buttonText?: string
  type?: 'outlined' | 'filed'
  hasIcon?: boolean
}

export function SelectOptionButton({
  children,
  onPress,
  enabled = true,
  loading = false,
  buttonText,
  textColor,
  type,
  hasIcon = true,
  ...rest
}: SelectOptionButtonProps) {
  const theme = useTheme()
  const gradientColors = [
    theme.colors.gradient.primary,
    theme.colors.gradient.secundary
  ]

  return (
    <LinearGradient
      style={{
        width: '100%',
        height: 56,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: type === 'outlined' ? 2 : 0
      }}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      locations={[0, 1]}
      colors={gradientColors}
    >
      <Container
        filedColor={type === 'outlined' ? theme.colors.white : ''}
        onPress={onPress}
        {...rest}
      >
        {loading && <ActivityIndicator color={theme.colors.white} />}

        {!loading && (
          <>
            {hasIcon && (
              <View style={{ position: 'absolute', left: 12 }}>{children}</View>
            )}
            <ButtonText
              style={{
                color:
                  type === 'outlined'
                    ? theme.colors.primary
                    : theme.colors.white
              }}
            >
              {buttonText}
            </ButtonText>
          </>
        )}
      </Container>
    </LinearGradient>
  )
}
