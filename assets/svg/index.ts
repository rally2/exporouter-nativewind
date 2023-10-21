import { SvgProps } from 'react-native-svg';
import Headphones from './headphones.svg';
import { StyledOptions, styled } from 'nativewind';

const defaultSvgStyledProps: StyledOptions<SvgProps, keyof SvgProps, keyof SvgProps> = {
  classProps: ['fill', 'stroke']
};

// Add SVG components here.
// Key will dictate how to use the component i.e. <SVG.* /> where * is the key.
const SVG = {
  Headphones
};

// Don't touch.  This just converts the SVG object into a styled object so that you
// can leverage the svg props with your tailwind utility classes.
export default Object.fromEntries(
  Object.entries(SVG).map(([key, SvgComponent]) => [
    key,
    styled(SvgComponent, defaultSvgStyledProps)
  ])
);
