import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconsType } from "../../../../types/Icon/types";

function NotificationDot({ size }: IconsType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a1.999 1.999 0 01-3.46 0"
        stroke="#414040"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={20} cy={4} r={4} fill="#FF5252" />
    </Svg>
  );
}

export default NotificationDot;
