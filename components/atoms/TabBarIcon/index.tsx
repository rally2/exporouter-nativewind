import React from 'react';
import { SvgProps } from 'react-native-svg';
import { tv } from 'tailwind-variants';

type Props = {
  focused: boolean;
  width: number;
  height: number;
  Icon: React.FC<SvgProps>;
  className?: string;
};

export const variants = tv({
  base: 'fill-Neutral-Grey-60',
  variants: {
    focused: { true: 'fill-Primary-70' }
  }
});

const TabBarIcon = ({ focused, Icon, className }: Props) => {
  return <Icon className={`${variants({ focused: focused })} ${className}`} />;
};

export default TabBarIcon;
