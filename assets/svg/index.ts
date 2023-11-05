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
} as const;

// Probably don't need to touch anything below this line
type StyledSVGType = ReturnType<typeof styled<SvgProps, keyof SvgProps, keyof SvgProps>>;
type SVGComponents = {
  [K in keyof typeof SVG]: StyledSVGType;
};

export default Object.fromEntries(
  Object.entries(SVG).map(([key, SvgComponent]) => [
    key as keyof typeof SVG,
    styled(SvgComponent, defaultSvgStyledProps)
  ]) as [keyof typeof SVG, StyledSVGType][]
) as SVGComponents;
