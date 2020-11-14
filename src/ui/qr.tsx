import React from 'react'
import QRCode from 'react-native-qrcode-generator'

import { QrProps } from './qr-common'

export function Qr({size, bgColor, fgColor, value}: QrProps) {
  return (
    <QRCode size={size} bgColor={bgColor || '#000000'} fgColor={fgColor || '#ffffff'} value={value}/>
  )
}
