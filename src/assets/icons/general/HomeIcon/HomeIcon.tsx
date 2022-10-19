import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconsType } from "../../../../types/Icon/types";

function HomeIcon({ size, stroke }: IconsType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 9l9-7 9 7v11a2 2 0 01-.586 1.414C20.04 21.79 15.53 22 15 22V12H9v10c-.53 0-5.04-.21-5.414-.586A2 2 0 013 20V9z"
        stroke={stroke ? stroke : "#414040"}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22V12h6v10"
        stroke={stroke ? stroke : "#414040"}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HomeIcon;
