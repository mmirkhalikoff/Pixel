import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconsType } from "../../../../types/Icon/types";

function WalletIcon({ size, stroke }: IconsType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.538 2.077H3.462A3.465 3.465 0 000 5.538v12.923a3.465 3.465 0 003.462 3.462h17.076A3.465 3.465 0 0024 18.46V5.538a3.465 3.465 0 00-3.462-3.461zm2.077 12H17.54A2.08 2.08 0 0115.46 12a2.08 2.08 0 012.077-2.077h5.077v4.154zm0-5.539H17.54A3.465 3.465 0 0014.076 12a3.466 3.466 0 003.461 3.461h5.077v3a2.08 2.08 0 01-2.076 2.077H3.461a2.08 2.08 0 01-2.077-2.077V5.538a2.08 2.08 0 012.077-2.077h17.076a2.08 2.08 0 012.077 2.077v3z"
        fill="#414040"
      />
      <Path
        d="M18.462 11.308h-.924a.692.692 0 100 1.384h.924a.692.692 0 000-1.384z"
        fill="#414040"
      />
    </Svg>
  );
}

export default WalletIcon;
