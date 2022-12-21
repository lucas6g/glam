import { Input } from '../../../components/Input/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as S from './RegisterClientStyles'
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import { Controller } from 'react-hook-form'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import 'yup-phone'
import { Link } from '../../../components/Link/Link'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../../components/Button/Button'
import { OrDivisor } from '../../../components/OrDivisor/OrDivisor'
import { SocialAuthButtons } from '../../../components/SocialAuthButtons/SocialAuthButtons'
import { phoneInputMask } from '../../../utils/masks'

interface FormData {
  name: string
  phone: string
  password: string
  acceptTerms: boolean
}

export function RegisterClient() {
  const RegisterClientSchemma = yup.object().shape({
    name: yup
      .string()
      .required('O campo nome é obrigátorio.')
      .matches(/^[A-zÀ-ú\s]+$/, 'Digite apenas seu nome.')
      .test(
        'is-full-name',
        'Digite seu nome completo',
        (inputValue: string) => {
          const name = inputValue?.split(' ')
          return !!name[1]
        }
      ),
    phone: yup
      .string()
      .phone('BR', undefined, 'Digite um número correto')
      .required(),
    password: yup.string().required('O Campo senha é obrigatorio'),
    acceptTerms: yup.bool().oneOf([true])
  })

  const navigation = useNavigation()
  const { control, handleSubmit, formState, getFieldState } = useForm<FormData>(
    {
      resolver: yupResolver(RegisterClientSchemma),
      mode: 'all'
    }
  )

  function handleClientRegister(values: FormData) {
    console.log(values)
  }

  const nameState = getFieldState('name', formState)
  const phoneState = getFieldState('phone', formState)
  const passwordState = getFieldState('password', formState)
  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Title>Vamos começar!</S.Title>
          <S.SubTitle>Por favor, informe os seus dados.</S.SubTitle>
          <Input
            name="name"
            label="Nome completo*"
            isCorrect={!formState.errors.name && nameState.isDirty}
            placeholder="Digite seu nome completo"
            control={control}
            autoCorrect={false}
            error={formState.errors.name}
            autoCapitalize="words"
          />
          <View style={{ marginTop: 22 }} />
          <Input
            name="phone"
            label="Número do WhatApp*"
            isCorrect={!formState.errors.phone && phoneState.isDirty}
            placeholder="Digite seu WhatsApp"
            keyboardType="phone-pad"
            mask={phoneInputMask}
            control={control}
            autoCorrect={false}
            error={formState.errors.phone}
          />

          <View style={{ marginTop: 22 }} />
          <Input
            name="password"
            label="Senha*"
            isCorrect={!formState.errors.password && passwordState.isDirty}
            placeholder="Digite sua senha"
            control={control}
            autoCorrect={false}
            isPassword={true}
            error={formState.errors.password}
          />

          <View style={{ marginTop: 24 }} />

          <S.ServiceTerms>
            <Controller
              name="acceptTerms"
              control={control}
              render={({ field: { onChange } }) => (
                <BouncyCheckbox
                  size={17}
                  fillColor="#979797"
                  unfillColor="#ffffff"
                  iconStyle={{ borderRadius: 5 }}
                  innerIconStyle={{
                    borderWidth: 2,
                    borderRadius: 5,
                    borderColor: '#979797'
                  }}
                  style={{ marginTop: 1 }}
                  disableText
                  onPress={(isChecked: boolean) => {
                    onChange(isChecked)
                  }}
                />
              )}
            />
            <S.Terms>
              Li e concordo com os{' '}
              <Link
                onPress={() => {
                  navigation.navigate('Terms' as never)
                }}
                text="Termos de Serviços."
              />{' '}
              Os termos estarão disponíveis para consulta dentro do aplicativo.
              Clientes e Glam poderam entrar em contato via e-mail ou WhatsApp.
            </S.Terms>
          </S.ServiceTerms>

          <Button
            enabled={formState.isValid}
            onPress={handleSubmit(handleClientRegister)}
          >
            Cadastrar
          </Button>

          <View style={{ marginTop: 24 }} />
          <OrDivisor />
          <View style={{ marginTop: 24 }} />
          <SocialAuthButtons />
        </S.Container>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}
