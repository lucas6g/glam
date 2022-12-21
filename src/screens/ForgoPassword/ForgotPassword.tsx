import * as S from './FogotPasswordStyles'
import React from 'react'
import { Input } from '../../components/Input/Input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { phoneInputMask } from '../../utils/masks'
import { Button } from '../../components/Button/Button'
import { View } from 'react-native'
import { SocialAuthButtons } from '../../components/SocialAuthButtons/SocialAuthButtons'
import { OrDivisor } from '../../components/OrDivisor/OrDivisor'
import { Link } from '../../components/Link/Link'
import { LinkContainer } from './FogotPasswordStyles'
import { useNavigation } from '@react-navigation/native'

interface FormData {
  phone: string
}
export function ForgotPassword() {
  const navigation = useNavigation()
  const ForGotPasswordSchema = yup.object().shape({
    phone: yup
      .string()
      .phone('BR', undefined, 'Digite um número correto')
      .required()
  })
  const { control, handleSubmit, formState, getFieldState } = useForm<FormData>(
    {
      resolver: yupResolver(ForGotPasswordSchema),
      mode: 'all'
    }
  )
  function handleForgotPassword(values: FormData) {
    console.log(values)
    navigation.navigate(
      'ConfirmationCode' as never,
      {
        phone: values.phone
      } as never
    )
  }
  const phoneState = getFieldState('phone', formState)

  return (
    <S.Container>
      <S.Content>
        <S.Title>RECUPERAR SENHA</S.Title>
        <S.SubTitle>Problemas para entrar?</S.SubTitle>
        <S.Description>
          Insira seu número do WhatsApp ou email ultilizado no cadastro e
          enviaremos um link para você voltar a acessar a sua conta.
        </S.Description>
        <Input
          name="phone"
          label="Número do WhatApp*"
          isCorrect={!formState.errors.phone && phoneState.isDirty}
          placeholder="Número do WhatsApp"
          keyboardType="phone-pad"
          mask={phoneInputMask}
          control={control}
          autoCorrect={false}
          error={formState.errors.phone}
        />
        <View style={{ marginTop: 24 }} />
        <Button
          enabled={formState.isValid}
          onPress={handleSubmit(handleForgotPassword)}
        >
          Avançar
        </Button>
        <View style={{ marginTop: 24 }} />
        <OrDivisor />
        <View style={{ marginTop: 24 }} />
        <SocialAuthButtons />
      </S.Content>
      <LinkContainer>
        <Link onPress={() => navigation.goBack()} text="Voltar para o login" />
      </LinkContainer>
    </S.Container>
  )
}
