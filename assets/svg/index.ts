import Bell from './bell.svg';
import BellFilled from './bell-fill.svg';
import Cart from './cart.svg';
import CartFilled from './cart-fill.svg';
import Heart from './heart.svg';
import HeartFilled from './heart-fill.svg';
import Home from './home.svg';
import HomeFilled from './home-fill.svg';
import Account from './person-circle.svg';
import AccountFilled from './person-circle-fill.svg';
import { cssInterop } from 'nativewind';

// Add SVG components here.
// Key will dictate how to use the component i.e. <SVG.* /> where * is the key.
export const SVG = {
  Account,
  AccountFilled,
  Bell,
  BellFilled,
  Cart,
  CartFilled,
  Heart,
  HeartFilled,
  Home,
  HomeFilled
} as const;

for (const [_, value] of Object.entries(SVG)) {
  cssInterop(value, {
    className: 'style'
  });
}

export default SVG;
