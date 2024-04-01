import { DefaultTheme } from '@react-navigation/native';
import { Colors } from './colors';

export const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.background
    },
  };