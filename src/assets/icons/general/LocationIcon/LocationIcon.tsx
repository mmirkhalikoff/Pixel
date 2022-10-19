import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconsType } from "../../../../types/Icon/types";

function LocationIcon({ size, stroke }: IconsType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 13.43a3.12 3.12 0 100-6.24 3.12 3.12 0 000 6.24z"
        stroke="#292D32"
        strokeWidth={1.5}
      />
      <Path
        d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 01-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05z"
        stroke="#292D32"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default LocationIcon;
