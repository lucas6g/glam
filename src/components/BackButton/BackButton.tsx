import React from 'react'
import {
  BorderlessButtonProps,
  BorderlessButton
} from 'react-native-gesture-handler'
import ArrowLeft from '../../assets/arrow-left.svg'

interface BackButtonProps extends BorderlessButtonProps {
  color?: string
}

export function BackButton({ color, ...rest }: BackButtonProps) {
  return (
    <BorderlessButton
      style={{
        height: 24,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      {...rest}
    >
      <ArrowLeft width={10} height={16} />
    </BorderlessButton>
  )
}
