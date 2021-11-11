import React from "react";

const Backdrops = ({ type }) => {
  if (type) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
      >
        {type === "waves" ? (
          <>
            <g mask='url("#SvgjsMask1072")' fill="none">
              <rect
                width="100%"
                height="100%"
                x="0"
                y="0"
                fill="rgba(24, 24, 24, 1)"
              />
              <path
                d="M0,900.182C167.706,918.594,335.329,829.837,460.866,717.121C577.586,612.321,582.824,437.383,664.558,303.494C761.798,144.205,968.573,44.254,985.103,-141.636C1001.97,-331.319,883.369,-514.036,749.281,-649.256C619.497,-780.135,433.775,-823.079,257.141,-875.743C79.784,-928.622,-116.136,-1040.828,-280.819,-956.382C-448.287,-870.508,-439.88,-627.112,-539.328,-467.331C-618.475,-340.168,-753.143,-256.456,-804.116,-115.614C-862.609,46.007,-931.26,236.83,-848.744,387.608C-766.025,538.758,-547.612,533.52,-400.118,622.595C-258.293,708.246,-164.692,882.101,0,900.182"
                fill="#131313"
              />
              <path
                d="M2000 1735.933C2148.168 1728.3490000000002 2295.8469999999998 1731.71 2431.206 1670.97 2581.835 1603.377 2731.389 1514.824 2812.809 1371.1970000000001 2897.244 1222.251 2901.501 1043.234 2883.583 872.96 2865.151 697.798 2841.756 501.421 2709.092 385.56899999999996 2578.614 271.626 2378.699 324.168 2210.017 284.749 2053.613 248.19899999999996 1909.07 120.33600000000001 1754.054 162.38599999999997 1598.743 204.51599999999996 1534.245 383.908 1421.429 498.665 1299.145 623.053 1075.645 691.312 1063.04 865.2860000000001 1050.233 1042.052 1277.5140000000001 1135.763 1364.0639999999999 1290.422 1440.637 1427.253 1411.037 1626.649 1539.459 1716.616 1667.901 1806.597 1843.38 1743.95 2000 1735.933"
                fill="#1d1d1d"
              />
            </g>
            <defs>
              <mask id="SvgjsMask1072">
                <rect width="100%" height="100%" fill="#ffffff"></rect>
              </mask>
            </defs>
          </>
        ) : type === "waves-alt" ? (
          <>
            <g mask='url("#SvgjsMask1077")' fill="none">
              <rect
                width="100%"
                height="100%"
                x="0"
                y="0"
                fill="rgba(24, 24, 24, 1)"
              ></rect>
              <path
                d="M0,911.494C165.79,938.729,295.672,770.378,431.854,671.978C560.64,578.923,734.479,507.154,772.948,352.994C811.457,198.674,654.144,66.33,621.852,-89.409C592.457,-231.177,663.803,-387.604,593.182,-513.995C517.855,-648.81,379.309,-743.669,231.425,-788.162C83.072,-832.796,-76.836,-810.834,-223.029,-759.565C-364.33,-710.011,-492.016,-623.848,-580.841,-503.301C-665.831,-387.957,-692.681,-244.237,-707.73,-101.756C-722.314,36.319,-733.53,182.825,-666.131,304.212C-600.553,422.318,-449.209,452.629,-349.377,543.641C-221.823,659.927,-170.322,883.514,0,911.494"
                fill="#131313"
              ></path>
              <path
                d="M2000 1901.65C2173.181 1948.992 2389.852 1932.47 2519.339 1808.108 2649.533 1683.066 2608.083 1468.873 2636.26 1290.57 2656.792 1160.642 2655.016 1036.157 2662.085 904.807 2671.187 735.693 2769.9809999999998 553.279 2683.788 407.494 2597.82 262.09000000000003 2397.7889999999998 244.02300000000002 2238.378 188.159 2070.233 129.235 1898.24 21.04200000000003 1727.6390000000001 72.42399999999998 1557.174 123.76499999999999 1474.963 309.869 1366.23 450.83500000000004 1263.847 583.568 1138.759 706.869 1110.774 872.149 1082.487 1039.213 1110.146 1224.558 1212.342 1359.712 1309.0639999999999 1487.628 1503.7559999999999 1475.693 1635.872 1566.594 1774.565 1662.02 1837.608 1857.257 2000 1901.65"
                fill="#1d1d1d"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1077">
                <rect width="100%" height="100%" fill="#ffffff"></rect>
              </mask>
            </defs>
          </>
        ) : (
          <></>
        )}
      </svg>
    );
  } else {
    return <></>;
  }
};

export default Backdrops;
