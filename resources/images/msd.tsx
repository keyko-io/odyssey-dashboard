import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MSDLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={72} height={72} viewBox="0 0 72 72" fill="none" {...props}>
      <Path
        d="M18 54h36c0 9.94-8.059 18-18 18s-18-8.06-18-18zm0-36c0-9.94 8.059-18 18-18s18 8.06 18 18H18zm36.002 0C63.941 18 72 26.06 72 36s-8.057 18-17.998 18c0-9.94-8.06-18-18.001-18 9.94 0 18-8.06 18-18zM0 36c0-9.94 8.057-18 17.998-18 0 9.94 8.06 18 18.001 18-9.94 0-18 8.06-18 18C8.056 54 0 45.94 0 36z"
        fill="#00877B"
      />
    </Svg>
  )
}

export default MSDLogo
