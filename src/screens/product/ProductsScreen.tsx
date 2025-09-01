import { FlatList, Text, View} from 'react-native'
import { globalStyles } from '../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButoon'
import {type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator'

const Products = [
  {id:1, name:'Product 1'},
  {id:2, name:'Product 2'},
  {id:3, name:'Product 3'},
  {id:4, name:'Product 4'},
  {id:5, name:'Product 5'},
]

export default function ProductsScreen() {
    // Hook de navegación esto nos permite navegar entre pantallas solo con el nombre quitando el "as never"
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style= {globalStyles.container}>
      <Text style={globalStyles.title}>Products</Text>
      <FlatList
        data={Products}
        renderItem={({ item }) => (
          <View key={item.id}>
            <PrimaryButton label={item.name} action={() => navigation.navigate('Product', { id: item.id, name: item.name })} />
          </View>
        )}
      />
      <Text style={globalStyles.title}>Ajustes</Text>
      <PrimaryButton label='Go to Settings' action={() => navigation.navigate('Settings' as never)} />
    </View>
  )
}
