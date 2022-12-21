import { LinearGradient } from 'expo-linear-gradient'
import { Controller, FieldError } from 'react-hook-form'
import { TextInput, TextInputProps, Platform } from 'react-native'
import MaskInput, { Mask } from 'react-native-mask-input'
import { StyleSheet } from 'react-native'
import theme from '../../styles/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import {
  ErrorMessage,
  InputBlock,
  InputContainer,
  Label,
  SeePasswordButton
} from './InputStyles'
import { useState } from 'react'
import { hp } from '../../utils/dimensions'
import { RFValue } from 'react-native-responsive-fontsize'
interface InputProps extends TextInputProps {
  label?: string
  control: any
  name?: string
  error?: FieldError
  mask?: Mask
  isCorrect?: boolean
  isPassword?: boolean
}

export function Input({
  label,
  error,
  control,
  name,
  mask,
  isCorrect,
  isPassword,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(true)

  const gradientColors = [
    theme.colors.gradient.primary,
    theme.colors.gradient.secundary
  ]

  const errorColor = [theme.colors.red, theme.colors.red]
  const correctColor = [theme.colors.green, theme.colors.green]

  function getInputStateColor() {
    if (!!error) {
      return errorColor
    }

    if (isCorrect) {
      return correctColor
    }
    return gradientColors
  }

  function handleShowPassword() {
    if (showPassword) {
      setShowPassword(false)
    } else {
      setShowPassword(true)
    }
  }

  return (
    <InputBlock>
      {label && <Label>{label}</Label>}

      <LinearGradient
        style={{
          width: '100%',
          height: hp(48),
          borderRadius: 2,
          padding: 2
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0.1 }}
        locations={[0, 1]}
        colors={getInputStateColor()}
      >
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value, onBlur } }) => {
            return !mask ? (
              <InputContainer>
                <TextInput
                  style={[styles.input]}
                  placeholderTextColor={'rgba(15, 8, 8, 0.3)'}
                  onChangeText={onChange}
                  secureTextEntry={showPassword && isPassword}
                  onBlur={onBlur}
                  selectionColor={theme.colors.primary}
                  value={value}
                  {...rest}
                />
                {isPassword && (
                  <SeePasswordButton onPress={handleShowPassword}>
                    <MaterialCommunityIcons
                      selectable={Platform.OS === 'android' ? true : false}
                      name={!showPassword ? 'eye-off' : 'eye'}
                      size={24}
                      color={theme.colors.primary}
                    />
                  </SeePasswordButton>
                )}
              </InputContainer>
            ) : (
              <InputContainer>
                <MaskInput
                  mask={mask}
                  onBlur={onBlur}
                  onChangeText={(formatedValue, value) => {
                    onChange(formatedValue)
                  }}
                  selectionColor={theme.colors.primary}
                  placeholderTextColor={'rgba(49, 49, 49, 0.3)'}
                  style={styles.input}
                  value={value}
                  {...rest}
                />
              </InputContainer>
            )
          }}
        />
      </LinearGradient>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputBlock>
  )
}

const styles = StyleSheet.create({
  input: {
    height: '100%',
    width: '100%',
    paddingLeft: 10,
    fontFamily: theme.fonts.nunito_semi_bold,
    fontSize: RFValue(12)
  }
})
