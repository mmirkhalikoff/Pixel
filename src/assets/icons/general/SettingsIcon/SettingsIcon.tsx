import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { IconsType } from "../../../../types/Icon/types";

function SettingsIcon({ size }: IconsType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 21" fill="none">
      <G
        clipPath="url(#clip0_329_3592)"
        stroke="#414040"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10 13a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
        <Path d="M16.167 13a1.375 1.375 0 00.275 1.517l.05.05a1.666 1.666 0 01-1.18 2.847 1.667 1.667 0 01-1.178-.489l-.05-.05a1.374 1.374 0 00-1.517-.275 1.375 1.375 0 00-.834 1.258V18A1.667 1.667 0 018.4 18v-.075a1.375 1.375 0 00-.9-1.258 1.375 1.375 0 00-1.516.275l-.05.05a1.667 1.667 0 11-2.359-2.359l.05-.05a1.375 1.375 0 00.275-1.516 1.375 1.375 0 00-1.258-.834H2.5a1.667 1.667 0 110-3.333h.075A1.375 1.375 0 003.833 8a1.375 1.375 0 00-.275-1.516l-.05-.05a1.667 1.667 0 112.359-2.359l.05.05a1.375 1.375 0 001.517.275H7.5a1.375 1.375 0 00.834-1.258V3a1.667 1.667 0 113.333 0v.075a1.376 1.376 0 00.833 1.258 1.375 1.375 0 001.517-.274l.05-.05a1.666 1.666 0 012.72 1.817 1.666 1.666 0 01-.362.54l-.05.05a1.374 1.374 0 00-.275 1.518V8a1.375 1.375 0 001.258.834h.142a1.667 1.667 0 010 3.333h-.075a1.376 1.376 0 00-1.258.833v0z" />
      </G>
      <Defs>
        <ClipPath id="clip0_329_3592">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SettingsIcon;
