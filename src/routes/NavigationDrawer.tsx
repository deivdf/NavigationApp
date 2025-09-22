import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import ProfileScreen from '../screens/profile/ProfileScreen';
//import { StackNavigator } from './StackNavigator';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function NavigationDrawer() {
  // se crea para tomar la dimension de pantalla del dispositivo cuando se reorienta a horizontal o vertical
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      // esto sirve para personalizar el drawer, para poner una imagen es un contenedor
      drawerContent={props => (
        <CustomDrawerContent
          //aqui envia los datos de naviegacion para imprimirlos abajo
          {...props}
        />
      )}
      screenOptions={{
        headerShown: false,
        drawerType: dimensions.width >= 640 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}
    >
      {/*<Drawer.Screen name="StackNavigator" component={StackNavigator} />*/}
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export { NavigationDrawer };

// aqui pones los estilos del contenedor de la imagen

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={
          //este view es el contnedor en la app es un cudrado
          {
            height: 200,
            backgroundColor: globalColors.primary,
            margin: 30,
            borderRadius: 30,
          }
        }
      />
      <DrawerItemList
        //este componente imprimen el reso de consa como el stacknavigator o el profile
        {...props}
      />
    </DrawerContentScrollView>
  );
};
