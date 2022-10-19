import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconsType } from "../../../../types/Icon/types";

function NotificationIcon({ size }: IconsType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a1.999 1.999 0 01-3.46 0"
        stroke="#414040"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default NotificationIcon;
