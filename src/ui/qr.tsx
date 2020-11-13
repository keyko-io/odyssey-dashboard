import React from 'react'
import QRCode from 'react-native-qrcode-generator'

import { QrProps } from './qr-common'

export function Qr({size, bgColor, fgColor, value}: QrProps) {
  return (
    <QRCode size={size} bgColor={bgColor || '#ffffff'} fgColor={fgColor || '#000000'} value={value}/>
  )
}
