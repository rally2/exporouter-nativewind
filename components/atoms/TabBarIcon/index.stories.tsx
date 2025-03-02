import SVG from '@/assets/svg';
import TabBarIcon from '.';
import { View } from 'react-native';
import React from 'react';

export default {
  title: 'Icons/TabBarIcon',
  component: TabBarIcon,
  decorators: [
    (Story: React.FC) => (
      <View className={'p-5'}>
        <Story />
      </View>
    )
  ],
  argTypes: {}
};

export const HomeUnfocused = {
  args: {
    Icon: SVG.Home,
    focused: false
  }
};

export const HomeFocussed = {
  args: {
    Icon: SVG.HomeFilled,
    focused: true
  }
};

export const BellUnfocused = {
  args: {
    Icon: SVG.Bell,
    focused: false
  }
};

export const BellFocused = {
  args: {
    Icon: SVG.BellFilled,
    focused: true
  }
};

export const AccountUnfocused = {
  args: {
    Icon: SVG.Account,
    focused: false
  }
};

export const AccountFocused = {
  args: {
    Icon: SVG.AccountFilled,
    focused: true
  }
};

export const HeartUnfocused = {
  args: {
    Icon: SVG.Heart,
    focused: false
  }
};

export const HeartFocused = {
  args: {
    Icon: SVG.HeartFilled,
    focused: true
  }
};

export const CartUnfocused = {
  args: {
    Icon: SVG.Cart,
    focused: false
  }
};

export const CartFocused = {
  args: {
    Icon: SVG.CartFilled,
    focused: true
  }
};
