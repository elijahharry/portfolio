function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={1024}
      height={500}
      viewBox="0 0 270.933 270.933"
      {...props}
      //   style={{ position: "absolute", bottom: -100, filter: "brightness(50%)" }}
      style={{
        position: "absolute",
        bottom: -100,
        filter: "brightness(45%)",
      }}
    >
      <defs>
        <linearGradient id="prefix__b">
          <stop offset={0} stopColor="#666" />
          <stop offset={1} stopColor="#b3b3b3" />
        </linearGradient>
        <linearGradient id="prefix__a">
          <stop offset={0} />
          <stop offset={0.088} stopOpacity={0.749} />
          <stop offset={0.502} stopOpacity={0.498} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#prefix__b"
          id="prefix__c"
          x1={123.516}
          y1={188.198}
          x2={146.83}
          y2={188.59}
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <path
        style={{
          lineHeight: "normal",
          fontVariantLigatures: "normal",
          fontVariantPosition: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantAlternates: "normal",
          fontFeatureSettings: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          textTransform: "none",
          textOrientation: "mixed",
          whiteSpace: "normal",
          shapePadding: 0,
          isolation: "auto",
          mixBlendMode: "normal",
          solidColor: "#000",
          solidOpacity: 1,
        }}
        d="M87.426 196.978c-1.258.005-3.104 1.31-3.317 2.544l-1.774 10.291c-.212 1.234 1.02 2.268 2.279 2.268h101.628c1.258 0 2.497-1.035 2.278-2.268l-1.854-10.427c-.22-1.233-1.815-2.8-3.073-2.794-32.056.124-64.112.262-96.167.386z"
        color="#000"
        fontWeight={400}
        fontFamily="sans-serif"
        overflow="visible"
        opacity={0.99}
        fill="gray"
        stroke="gray"
        strokeWidth={10.302}
        strokeLinecap="round"
        strokeLinejoin="round"
        paintOrder="stroke fill markers"
      />
      <path
        d="M87.286 196.642c-1.264.004-3.117 1.156-3.33 2.246l-1.782 9.09c-.213 1.09 1.025 2.003 2.288 2.003h102.06c1.265 0 2.51-.914 2.289-2.003l-1.862-9.21c-.22-1.088-1.823-2.472-3.087-2.468-32.192.11-64.384.232-96.576.342z"
        style={{
          lineHeight: "normal",
          fontVariantLigatures: "normal",
          fontVariantPosition: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantAlternates: "normal",
          fontFeatureSettings: "normal",
          textIndent: 0,
          textAlign: "start",
          textDecorationLine: "none",
          textDecorationStyle: "solid",
          textDecorationColor: "#000",
          textTransform: "none",
          textOrientation: "mixed",
          whiteSpace: "normal",
          shapePadding: 0,
          isolation: "auto",
          mixBlendMode: "normal",
          solidColor: "#000",
          solidOpacity: 1,
        }}
        color="#000"
        fontWeight={400}
        fontFamily="sans-serif"
        overflow="visible"
        fill="#333"
        stroke="#333"
        strokeWidth={9.42}
        strokeLinecap="round"
        strokeLinejoin="round"
        paintOrder="stroke fill markers"
      />
      <path
        d="M122.732 199.997h25.47z"
        fill="none"
        stroke="#000"
        strokeWidth={2.065}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.99}
        fill="#666"
        paintOrder="stroke fill markers"
        d="M122.732 176.928h25.469v22.54h-25.469z"
      />
      <g opacity={0.472}>
        <path
          opacity={0.99}
          fill="url(#prefix__c)"
          paintOrder="stroke fill markers"
          d="M122.732 176.928h25.469v22.54h-25.469z"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
