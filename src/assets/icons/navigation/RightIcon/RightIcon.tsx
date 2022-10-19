import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../../../theme/colors/colors";
import { IconsType } from "../../../../types/Icon/types";

function RightIcon({ size }: IconsType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9 18l6-6-6-6"
        stroke={colors.black10}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default RightIcon;
