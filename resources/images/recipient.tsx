import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function RECIPIENTLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={74} height={74} viewBox="0 0 74 74" fill="none" {...props}>
      <Path
        d="M37 73c19.882 0 36-16.118 36-36S56.882 1 37 1 1 17.118 1 37s16.118 36 36 36z"
        stroke="url(#prefix__paint0_linear)"
        strokeWidth={2}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.548 28.76a1.619 1.619 0 01-1.613-1.627c0-.898.72-1.627 1.613-1.627a1.62 1.62 0 011.612 1.627 1.62 1.62 0 01-1.613 1.627h.001zm-4.107 17.51v6.867l8.936-6.866h10.559a9.17 9.17 0 017.079 5.04l2.05 4.14h-34.08v-5.508c0-2.026 1.627-3.672 3.638-3.672h1.818zm8.184-32.31c6.529 0 11.822 5.342 11.822 11.933v7.16c0 5.273-4.233 9.547-9.458 9.547H27.441v-9.547h-3.637v-7.16c0-6.59 5.29-11.933 11.822-11.933h-.001z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={73}
          y1={37}
          x2={1}
          y2={37}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#006FEC" />
          <Stop offset={1} stopColor="#39C1CB" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={47.568}
          y1={51.731}
          x2={25.634}
          y2={19.531}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#39C1CB" stopOpacity={0.99} />
          <Stop offset={1} stopColor="#006FEC" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default RECIPIENTLogo
