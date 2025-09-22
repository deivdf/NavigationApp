import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PrimaryButton from '../../components/shared/PrimaryButoon';

export default function ProfileScreen() {
  //esto se utiliza para el manejo de las areas de el movil que la app no deba tocar como ej:donde esta la hora
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
    style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top
    }}
    ><Text>ProfileScreen</Text>
    <PrimaryButton 
    action = {
      () =>  navigation.dispatch(DrawerActions.toggleDrawer)
    }
    label='Abrir menu'
    />

    </View>
  )
}
