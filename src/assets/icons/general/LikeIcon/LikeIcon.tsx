import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconsType } from "../../../../types/Icon/types";

function LikeIcon({ size, fillColor, border, stroke, strokeWidth }: IconsType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.501 5.501 0 10-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z"
        stroke={border ? undefined : "#414040" || stroke ? stroke : "#414040"}
        fill={fillColor}
        strokeWidth={strokeWidth ? 1 : 2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default LikeIcon;
