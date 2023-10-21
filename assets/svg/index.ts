import { SvgProps } from 'react-native-svg';
import Headphones from './headphones.svg';
import { StyledOptions, styled } from 'nativewind';

const defaultSvgStyledProps: StyledOptions<SvgProps, keyof SvgProps, keyof SvgProps> = {
  classProps: ['fill', 'stroke']
};

const SVG = {
  Headphones: styled(Headphones, defaultSvgStyledProps)
};

export default SVG;
