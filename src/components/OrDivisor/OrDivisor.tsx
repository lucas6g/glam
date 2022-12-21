import { StyleSheet, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../styles/theme'
import { wp } from '../../utils/dimensions'

export function OrDivisor() {
  return (
    <View style={styles.container}>
      <View style={[styles.line, { marginRight: 16 }]} />
      <Text style={styles.text}>ou</Text>
      <View style={[styles.line, { marginLeft: 16 }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center'
  },
  text: {
    color: theme.colors.black,
    fontSize: RFValue(16),
    fontFamily: theme.fonts.nunito_semi_bold
  },
  line: {
    height: 1,
    width: wp(111),
    backgroundColor: theme.colors.black,
    marginTop: 4
  }
})
