import React from "react";
import Svg, { Path } from "react-native-svg"

function DONEIcon(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.798 24.644l-8.062-8.22L0 19.212l10.798 11.01L34 6.566l-2.736-2.79-20.466 20.867z"
        fill="#00E676"
      />
    </Svg>
  )
}

export default DONEIcon