import { Logo } from '../../components/Logo/Logo'
import { SelectOptionButton } from '../../components/SelectOptionButton/SelectOptionButton'
import { Container, Content, SubTitle, Title } from './ChoseProfileStyles'
import AccountPinkSvg from '../../assets/account-pink.svg'
import AccountWhiteSvg from '../../assets/account-white.svg'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function ChoseProfile() {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Content>
        <Logo width={250} height={143} />
        <Title>Cuide-se bem, você merece!</Title>

        <SubTitle>
          O que você gostaria de se tornar para {'\n'} o GLAM?
        </SubTitle>

        <SelectOptionButton
          onPress={() => {
            navigate('LoginOrRegister' as never)
          }}
          type="filed"
          buttonText="Cliente"
        >
          <AccountWhiteSvg />
        </SelectOptionButton>
        <View style={{ marginTop: 22 }} />
        <SelectOptionButton type="outlined" buttonText="Profissional">
          <AccountPinkSvg />
        </SelectOptionButton>
      </Content>
    </Container>
  )
}
