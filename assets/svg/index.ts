import Bell from './bell.svg';
import BellFilled from './bell-filled.svg';
import Cart from './cart.svg';
import CartFilled from './cart-filled.svg';
import Heart from './heart.svg';
import HeartFilled from './heart-filled.svg';
import Home from './home.svg';
import HomeFilled from './home-filled.svg';
import Account from './person-circle-fill.svg';
import AccountFilled from './person-circle-fill-filled.svg';

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

export default SVG;
