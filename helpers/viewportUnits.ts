import { Dimensions } from 'react-native';

const vh = (percentage: number) => {
  if (percentage < 0) throw new Error('percentage must be greater than zero');
  const h = Dimensions.get('window').height;
  return h * (percentage / 100);
};

const vw = (percentage: number) => {
  if (percentage < 0) throw new Error('percentage must be greater than zero');
  const w = Dimensions.get('window').width;
  return w * (percentage / 100);
};

export { vh, vw };
