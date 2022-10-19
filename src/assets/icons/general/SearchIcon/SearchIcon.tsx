import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconsType} from '../../../../types/Icon/types';

function SearchIcon({size, stroke}: IconsType) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
        stroke={stroke ? stroke : '#292D32'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon;
