import SVG from '@/assets/svg';
import HeaderScreenTitle from '@/components/atoms/HeaderScreenTitle';
import TabBarIcon from '@/components/atoms/TabBarIcon';
import Platform from '@/utils/Platform';
import tailwindConfig from '@/config/tailwind';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform as RNPlatform } from 'react-native';
const DEFAULT_TAB_BAR_HEIGHT = 48;

export default function TabLayout() {
  const { bottom } = useSafeAreaInsets();

  const tabBarStyle = {
    ...styles.defaultTabBarStyle,
    ...styles.tabBarStyle,
    height: DEFAULT_TAB_BAR_HEIGHT + bottom + (Platform.Android ? 8 : 0)
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle,
        headerStyle: {
          ...styles.defaultHeaderStyles
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              Icon={focused ? SVG.HomeFilled : SVG.Home}
              focused={focused}
              width={24}
              height={24}
            />
          ),
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="likes"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              Icon={focused ? SVG.HeartFilled : SVG.Heart}
              focused={focused}
              width={24}
              height={24}
            />
          ),
          tabBarBadgeStyle: styles.tabBarBadgeStyle,
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              Icon={focused ? SVG.CartFilled : SVG.Cart}
              focused={focused}
              width={24}
              height={24}
            />
          ),
          headerTitle: () => <HeaderScreenTitle title="Cart" />,
          headerTitleAlign: 'center',
          tabBarBadgeStyle: styles.tabBarBadgeStyle,
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="alerts"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              Icon={focused ? SVG.BellFilled : SVG.Bell}
              focused={focused}
              width={24}
              height={24}
            />
          ),
          headerTitle: () => <HeaderScreenTitle title="Inbox" />,
          headerTitleAlign: 'center',
          tabBarBadgeStyle: styles.tabBarBadgeStyle,
          headerShown: false
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              Icon={focused ? SVG.AccountFilled : SVG.Account}
              focused={focused}
              width={24}
              height={24}
            />
          ),
          tabBarBadgeStyle: styles.tabBarBadgeStyle,
          tabBarBadge: undefined,
          headerShown: false
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    ...RNPlatform.select({
      ios: {},
      android: {
        paddingBottom: 8
      }
    })
  },
  tabBarBadgeStyle: {
    // TODO: https://github.com/marklawlor/nativewind/issues/682
    backgroundColor: '#f38231', // Accent-1
    color: tailwindConfig.theme.colors['Neutral-Grey-0'],
    fontSize: 12,
    marginLeft: 4
  },
  defaultTabBarStyle: {
    paddingTop: 8,
    borderTopWidth: 0,
    paddingHorizontal: 8
  },
  defaultHeaderStyles: {
    backgroundColor: tailwindConfig.theme.colors['Primary-70']
  }
});

export const defaultHeaderStyle = styles.defaultHeaderStyles;
