
import { NavigationContainer } from '@react-navigation/native';
//import { StackNavigator } from './src/routes/StackNavigator';
import { DrawerNavigation } from './src/routes/DrawerNavigation';



export const App = () => {
  return (
    <NavigationContainer>
        <DrawerNavigation />
    </NavigationContainer>
  );
};
export default App; 