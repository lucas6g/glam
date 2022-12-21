import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ChoseProfile } from '../screens/ChoseProfile/ChoseProfile'
import { LoginOrRegisterClient } from '../screens/LoginOrRegisterClient/LoginOrRegisterClient'
import { ForgotPassword } from '../screens/ForgoPassword/ForgotPassword'
import { Terms } from '../screens/Terms/Terms'
import { ConfirmationCode } from '../screens/ConfirmationCode/ConfirmationCode'
const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="ChoseProfile"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Screen name="ChoseProfile" component={ChoseProfile} />
      <Screen name="LoginOrRegister" component={LoginOrRegisterClient} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="Terms" component={Terms} />
      <Screen name="ConfirmationCode" component={ConfirmationCode} />
    </Navigator>
  )
}
