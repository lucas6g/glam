import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Text
} from 'react-native'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import theme from '../../styles/theme'

interface LinkProps extends TouchableWithoutFeedbackProps {
  text: string
}

export function Link({ text, ...rest }: LinkProps) {
  return (
    <TouchableWithoutFeedback {...rest}>
      <Text style={styles.link}>{text}</Text>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  link: {
    color: theme.colors.primary,
    fontSize: RFValue(12),
    fontFamily: theme.fonts.nunito_semi_bold
  }
})
