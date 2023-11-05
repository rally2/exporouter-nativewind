import { useColorScheme } from 'nativewind';
import { createContext, useContext, useState } from 'react';
import { Appearance } from 'react-native';

type ThemeContextType = {
  colorScheme: 'light' | 'dark';
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  colorScheme: Appearance.getColorScheme() || 'light',
  isDarkMode: Appearance.getColorScheme() === 'dark',
  toggleTheme: () => {}
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const toggleTheme = () => {
    if (colorScheme === 'dark') setIsDarkMode(false);
    else setIsDarkMode(true);

    toggleColorScheme();
  };

  const value: ThemeContextType = {
    colorScheme,
    isDarkMode,
    toggleTheme
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

export function useTheme() {
  const { colorScheme, isDarkMode, toggleTheme } = useContext(ThemeContext);

  return {
    colorScheme,
    isDarkMode,
    toggleTheme
  };
}
