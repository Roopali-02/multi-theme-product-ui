import { createContext } from 'react';

export type ThemeName = 'theme1' | 'theme2' | 'theme3';

export interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme1',
  setTheme: () => { },
});
