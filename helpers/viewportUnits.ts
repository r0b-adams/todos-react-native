import { Dimensions } from 'react-native';

const vh = (percentage: number) => {
  if (percentage < 0) throw new Error('percentage must be greater than zero');
  const windowHeight = Dimensions.get('window').height;
  return windowHeight * (percentage / 100);
};

const vw = (percentage: number) => {
  if (percentage < 0) throw new Error('percentage must be greater than zero');
  const windowWidth = Dimensions.get('window').width;
  return windowWidth * (percentage / 100);
};

export { vh, vw };
