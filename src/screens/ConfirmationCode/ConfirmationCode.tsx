import React, { useState } from 'react'
import * as S from './ConfirmatioCodeStyles'
import { BackButton } from '../../components/BackButton/BackButton'
import { View, StyleSheet, Text } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Link } from '../../components/Link/Link'
import { Button } from '../../components/Button/Button'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from 'react-native-confirmation-code-field'
import theme from '../../styles/theme'
import { wp } from '../../utils/dimensions'
import { RFValue } from 'react-native-responsive-fontsize'

interface RouteParams {
  phone: string
}

export function ConfirmationCode() {
  const route = useRoute()
  const { phone } = route.params as RouteParams
  const navigation = useNavigation()
  const [buttonEnable, setButtonEnable] = useState(false)
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({ value, cellCount: 6 })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  })

  function handleConfirmCode() {}

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <BackButton onPress={() => navigation.goBack()} />
          <S.Title>Inserir o código de confirmação</S.Title>
          <View />
        </S.Header>

        <S.Instruction>
          Insira o código de confirmação de 6 dígitos que enviamos para {phone}.{' '}
          <Link text="Solicitar um novo." />
        </S.Instruction>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={(code) => {
            setValue(code)
            if (code.length === 6) {
              setButtonEnable(true)
            } else {
              setButtonEnable(false)
            }
          }}
          cellCount={6}
          rootStyle={styles.codeFiledRoot}
          autoFocus
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <>
              {index === 3 && <View style={{ marginHorizontal: 12 }} />}

              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            </>
          )}
        />
      </S.Content>
      <S.ButtonContainer>
        <Button enabled={buttonEnable} onPress={() => alert('Eaee')}>
          Avançar
        </Button>
      </S.ButtonContainer>
    </S.Container>
  )
}

const styles = StyleSheet.create({
  codeFiledRoot: {
    width: wp(258),
    alignSelf: 'center'
  },
  cellRoot: {
    width: 31,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  cellText: {
    color: theme.colors.black,
    fontSize: RFValue(30),
    textAlign: 'center',
    fontFamily: theme.fonts.nunito_regular
  },
  focusCell: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2
  }
})
