import { createAppContainer, createStackNavigator } from 'react-navigation';
import Cart from './components/cart/Cart';
import Home from './components/home/Home';

const stackNavigator = createStackNavigator(
  {
    Home,
    Cart,
  },
  {
    headerLayoutPreset: 'left',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#191920',
      },
      headerTintColor: '#fff',
    },
  }
);

export default createAppContainer(stackNavigator);
