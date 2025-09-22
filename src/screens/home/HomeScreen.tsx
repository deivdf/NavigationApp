import { useEffect } from 'react'
import {Pressable, Text, useWindowDimensions, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'
import PrimaryButton from '../../components/shared/PrimaryButoon';
import { RootStackParams } from '../../routes/StackNavigator';



export default function HomeScreen() {
  // se crea para tomar la dimension de pantalla del dispositivo cuando se reorienta a horizontal o vertical
  const dimensions = useWindowDimensions();
  const isPermanentDrawer = dimensions.width>=640;
  // Hook de navegación esto nos permite navegar entre pantallas solo con el nombre quitando el "as never"
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  //en este apartado se hace uso de este useEffect para implementar un boton en la cabecera para que haga de menu deplegable
    useEffect(() =>{
      navigation.setOptions({
        headerLeft: isPermanentDrawer ? () => null
        :
        () => (
          <Pressable
          //aqui si se precina le boton el drawer se abre
           onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text>
              Menu
            </Text>
          </Pressable>
        )
      })
    }, [isPermanentDrawer, navigation])
  return (
    <View style={globalStyles.container}>
      <PrimaryButton label='Go to Products' action={() => navigation.navigate('Products')} />
      <PrimaryButton label='Go to Settings' action={() => navigation.navigate('Settings')} />
    </View>
  )
}
