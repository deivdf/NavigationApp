import { NavigationContainer } from '@react-navigation/native';
import { NavigationDrawer } from './src/routes/NavigationDrawer';
//import { StackNavigator } from './src/routes/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
};
export default App;
