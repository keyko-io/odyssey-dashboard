import React from 'react'
import QRCode from 'react-native-qrcode-generator'

import { QrProps } from './qr-common'

export function Qr(props: QrProps) {
  return (
    <QRCode size={props.size}  bgColor={props.bgColor} fgColor={props.fgColor} value={props.value}/>
  )
}
