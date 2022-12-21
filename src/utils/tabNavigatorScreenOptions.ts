import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs'
import theme from '../styles/theme'

export const tabNavigatorScreenOptions = {
  tabBarLabelStyle: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontFamily: theme.fonts.nunito_bold
  },

  tabBarActiveTintColor: theme.colors.primary,
  tabBarInactiveTintColor: theme.colors.gray,
  tabBarIndicatorStyle: { backgroundColor: theme.colors.primary },
  tabBarStyle: {
    elevation: 0,
    shadowColor: '#fffff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0
  }
} as MaterialTopTabNavigationOptions
