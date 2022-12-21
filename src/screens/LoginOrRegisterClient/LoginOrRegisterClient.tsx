import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Container, LogoContainer } from './LoginOrRegisterClientStyles'
import { Logo } from '../../components/Logo/Logo'
import { tabNavigatorScreenOptions } from '../../utils/tabNavigatorScreenOptions'
import { LoginClient } from './LoginClient/LoginClient'
import { RegisterClient } from './RegisterClient/RegisterClient'

const Tab = createMaterialTopTabNavigator()
export function LoginOrRegisterClient() {
  return (
    <Container>
      <LogoContainer>
        <Logo width={83} height={48} />
      </LogoContainer>

      <Tab.Navigator screenOptions={tabNavigatorScreenOptions}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Entrar'
          }}
          name="Login"
          component={LoginClient}
        />
        <Tab.Screen
          options={{ tabBarLabel: 'Cadastrar' }}
          name="Register"
          component={RegisterClient}
        />
      </Tab.Navigator>
    </Container>
  )
}
