import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform
} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import FacebookIcon from '../../assets/facebook-icon.svg'
import GoogleIcon from '../../assets/google-icon.svg'
import { hp, wp } from '../../utils/dimensions'
import theme from '../../styles/theme'

export function SocialAuthButtons() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && (
        <>
          <TouchableWithoutFeedback onPress={() => alert('Viado')}>
            <View
              style={[
                styles.button,
                { borderWidth: 1, borderColor: theme.colors.black }
              ]}
            >
              <AntDesign name="apple1" size={24} color="black" />
            </View>
          </TouchableWithoutFeedback>
          <View style={{ marginRight: wp(30) }} />
        </>
      )}
      <TouchableWithoutFeedback>
        <FacebookIcon width={50} height={50} />
      </TouchableWithoutFeedback>
      <View style={{ marginLeft: wp(30) }} />
      <TouchableWithoutFeedback>
        <GoogleIcon width={50} height={50} />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },

  button: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
