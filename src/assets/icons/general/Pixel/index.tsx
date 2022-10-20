import * as React from 'react';
import Svg, {Defs, LinearGradient, Path, Rect, Stop} from 'react-native-svg';
import {colors} from '../../../../theme/colors/colors';
import {IconsType} from '../../../../types/Icon/types';

function PixelIcon({size, stroke}: IconsType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Rect width={24} height={24} rx={3} fill={colors.bgApp} />
      <Path
        d="M12.357 3.7a6.086 6.086 0 00-5.742 8.03.866.866 0 001.066.532.863.863 0 00.515-1.063 3.993 3.993 0 01-.236-1.545 4.373 4.373 0 114.637 4.496s-.85.052-1.274.104c-.156.023-.31.053-.463.092a.055.055 0 01-.04.017.057.057 0 01-.04-.017.056.056 0 010-.068l.132-.719.798-3.593a.83.83 0 10-1.625-.348s-1.9 8.797-1.9 8.877a.798.798 0 00.59.974h.044a.797.797 0 00.978-.595.175.175 0 010-.04c.024-.103.264-1.273.264-1.273a2.157 2.157 0 011.785-1.697 23.8 23.8 0 01.954-.08A6.058 6.058 0 0012.357 3.7z"
        fill="url(#paint0_linear_8_159)"
      />
      <Path
        d="M12.357 3.7a6.086 6.086 0 00-5.742 8.03.866.866 0 001.066.532.863.863 0 00.515-1.063 3.993 3.993 0 01-.236-1.545 4.373 4.373 0 114.637 4.496s-.85.052-1.274.104c-.156.023-.31.053-.463.092a.055.055 0 01-.04.017.057.057 0 01-.04-.017.056.056 0 010-.068l.132-.719.798-3.593a.83.83 0 10-1.625-.348s-1.9 8.797-1.9 8.877a.798.798 0 00.59.974h.044a.797.797 0 00.978-.595.175.175 0 010-.04c.024-.103.264-1.273.264-1.273a2.157 2.157 0 011.785-1.697 23.8 23.8 0 01.954-.08A6.058 6.058 0 0012.357 3.7z"
        fill="url(#paint1_linear_8_159)"
        fillOpacity={0.2}
      />
      <Path
        d="M12.725 17.676a1.01 1.01 0 00-1.198.798 1.008 1.008 0 00.77 1.198h.028a.99.99 0 001.198-.742v-.056a1.046 1.046 0 00-.798-1.198z"
        fill={colors.lightyalow}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_8_159"
          x1={12.2762}
          y1={3.70007}
          x2={12.2762}
          y2={19.4949}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0.458333} stopColor={colors.lightyalow} />
          <Stop offset={1} stopColor={colors.lightyalow} stopOpacity={0.8} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_8_159"
          x1={12.2762}
          y1={3.70007}
          x2={12.2762}
          y2={19.4949}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={colors.lightyalow} />
          <Stop offset={0.213542} stopColor="white" stopOpacity={0.97} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default PixelIcon;
