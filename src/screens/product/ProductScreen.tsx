import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { useEffect } from 'react';

export default function ProductScreen() {
  // Hook para obtener los parámetros de la ruta actual 
  //con el tipo RouteProp indicamos que queremos los parámetros de la ruta 'Product' del RootStackParams
  // y se pude desestructurar para obtener los parámetros directamente
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>();
  const navigation = useNavigation();
  // useEffect para cambiar el título de la pantalla con el nombre del producto
  useEffect(() => {
    navigation.setOptions({ title: params.params?.name ?? 'Product Details' });
  }, []);
  console.log(params);
  return (
    <View style={globalStyles.container}>
      <Text
      style={{fontSize: 20, textAlign: 'center', marginTop: 10, fontWeight: 'bold'}}
      >
      {
        params.params?.name
      }
      </Text></View>
  )
}
