import React from 'react'
import { View } from 'react-native'
import QRCode from 'qrcode.react'
import { QrProps } from './qr-common';


export function Qr({size ,bgColor ,fgColor ,value}: QrProps) {
  return (
    <View>
      <QRCode height={size} width={size} value={value}/>
    </View>
  )
}
