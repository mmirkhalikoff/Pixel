import {Dimensions, PixelRatio} from 'react-native';

export let {width: windowWidth, height: windowHeight} =
  Dimensions.get('window');

const roundPixel = ({size}: any) => PixelRatio.roundToNearestPixel(size);
const {width, height} = Dimensions.get('screen');

const guideline = {
  width: 375,
  height: 812,
};

function scaleByWidthPercent({size}: any) {
  // calc percent value from style guide height
  const sizePercent = (size / guideline.width) * 100;
  // calc size percent for device screen
  const sizeForDeviceWidth = (sizePercent * width) / 100;

  return roundPixel(sizeForDeviceWidth);
}

export {scaleByWidthPercent as wp};
