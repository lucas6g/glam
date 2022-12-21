import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginOrRegisterClient } from '../screens/LoginOrRegisterClient/LoginOrRegisterClient'
const { Navigator, Screen } = createNativeStackNavigator()

export function ProfessionalFlowRoutes() {
  return (
    <Navigator
      initialRouteName="LoginOrRegisterClient"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Screen name="LoginOrRegisterClient" component={LoginOrRegisterClient} />
    </Navigator>
  )
}
