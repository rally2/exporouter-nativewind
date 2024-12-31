import { StyleSheet, Text, TextProps } from 'react-native';
import { tv, type VariantProps } from 'tailwind-variants';

/**
 * For reference of font weights:
 * Thin or Hairline: 100
 * Extra Light or Ultra Light: 200
 * Light: 300
 * Regular or Normal: 400
 * Medium: 500
 * Semi-Bold or Demi-Bold: 600
 * Bold: 700
 * Extra Bold or Ultra Bold: 800
 * Black or Heavy: 900
 */
export const variants = tv({
  base: 'color-Neutral-Black dark:color-Neutral-Black font-inter-regular text-body-14',
  variants: {
    font: {
      'inter-regular': 'font-inter-regular',
      'inter-bold': 'font-inter-bold',
      'inter-semiBold': 'font-inter-semiBold',
      'inter-medium': 'font-inter-medium',
      'inter-light': 'font-inter-light',
      'inter-extraLight': 'font-inter-extraLight',
      'inter-thin': 'font-inter-thin',
      'inter-black': 'font-inter-black',
      'inter-extraBold': 'font-inter-extraBold',
      'miller-regular': 'font-miller-regular',
      'miller-bold': 'font-miller-bold',
      'miller-light': 'font-miller-light',
      'miller-italic': 'font-miller-italic',
      'miller-lightItalic': 'font-miller-lightItalic',
      'miller-semiBold': 'font-miller-semiBold',
      'miller-semiBoldItalic': 'font-miller-semiBoldItalic'
    },
    size: {
      'display-1': 'text-display-1',
      'display-2': 'text-display-2',
      'display-3': 'text-display-3',
      'display-4': 'text-display-4',
      'display-5': 'text-display-5',
      'display-6': 'text-display-6',
      'display-7': 'text-display-7',
      'display-8': 'text-display-8',
      h1: 'text-h1',
      h2: 'text-h2',
      h3: 'text-h3',
      'eyebrow-12': 'text-eyebrow-12',
      'eyebrow-10': 'text-eyebrow-10',
      'body-20': 'text-body-20',
      'body-18': 'text-body-18',
      'body-16': 'text-body-16',
      'body-14': 'text-body-14',
      'body-12': 'text-body-12',
      'body-10': 'text-body-10'
    }
  }
});
// TODO: Look to remove this.  It is being used in one other component at the moment for a TextInput
export const typography = variants;

type TypographyVariants = VariantProps<typeof variants>;

export interface TypographyProps extends TypographyVariants, TextProps {
  children: React.ReactNode;
  className?: string;
}

function Typography({ font, size, children, className, ...props }: TypographyProps) {
  return (
    <Text className={`${variants({ font, size })} ${className}`} {...props}>
      {children}
    </Text>
  );
}

export default Typography;
