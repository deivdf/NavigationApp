import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductsScreen from '../screens/product/ProductsScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProductScreen from '../screens/product/ProductScreen';
// Definimos los tipos de las rutas y sus parámetros (usamos undefined si no hay parámetros)
export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Settings: undefined;
  Product: { id: number, name: string } | undefined;
};
const Stack = createStackNavigator <RootStackParams>();
// el secreenOptions es para configurar las opciones de la pantalla como el titulo, el estilo, etc

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerTitleAlign: 'center' , headerStyle: { elevation: 0 }}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}