
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButoon'
import { StackActions, useNavigation } from '@react-navigation/native'


export default function SettingsScreen() {
  //en esta navegación se utiliza para hacer el goBack para regresera a la anteririor si necesidad de saber cual es la anteririor despues de que haya una anteriror
  const navigation = useNavigation()
  //tambien tenemos el go to home que funciona con el popTOTop que te devuelve a la pantalla de inicio
  return (
    <View
    style={globalStyles.container}
    >
      <Text style={globalStyles.title}>SettingsScreen</Text>
      <PrimaryButton label='Go to back' action={() => navigation.goBack()} />
      <PrimaryButton label='Go to Home' action={() => navigation.dispatch(StackActions.popToTop())} />
      
    </View>
  )
}
