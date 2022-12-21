import { Input } from '../../../components/Input/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as S from './LoginClientStyles'
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import 'yup-phone'
import { Link } from '../../../components/Link/Link'
import { useNavigation } from '@react-navigation/native'
import { Button } from '../../../components/Button/Button'
import { OrDivisor } from '../../../components/OrDivisor/OrDivisor'
import { SocialAuthButtons } from '../../../components/SocialAuthButtons/SocialAuthButtons'
import { phoneInputMask } from '../../../utils/masks'

interface FormData {
  phone: string
  password: string
}

export function LoginClient() {
  const loginClientSchemma = yup.object().shape({
    phone: yup
      .string()
      .phone('BR', undefined, 'Digite um número correto')
      .required(),
    password: yup.string().required('O Campo senha é obrigatorio')
  })

  const navigation = useNavigation()
  const { control, handleSubmit, formState, getFieldState } = useForm<FormData>(
    {
      resolver: yupResolver(loginClientSchemma),
      mode: 'all'
    }
  )

  function handleClientLogin(values: FormData) {
    console.log(values)
  }

  const phoneState = getFieldState('phone', formState)
  const passwordState = getFieldState('password', formState)
  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <S.Container>
          <S.Title>Bem vindo de volta!</S.Title>
          <S.SubTitle>
            Por favor, faça login na sua conta de registro.
          </S.SubTitle>
          <Input
            name="phone"
            label="Celular"
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
            label="Senha"
            isCorrect={!formState.errors.password && passwordState.isDirty}
            placeholder="Digite sua senha"
            control={control}
            autoCorrect={false}
            isPassword={true}
            error={formState.errors.password}
          />

          <S.LinKContainer>
            <Link
              onPress={() => navigation.navigate('ForgotPassword' as never)}
              text={'Esqueceu a senha?'}
            />
          </S.LinKContainer>
          <View style={{ marginTop: 24 }} />

          <Button
            enabled={formState.isValid}
            onPress={handleSubmit(handleClientLogin)}
          >
            Entrar
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
