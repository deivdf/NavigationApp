import { Pressable, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme'
interface Props {
  action: () => void;
  label?: string;
}

function PrimaryButton({ action, label }: Props) {
  return (
    <View>
        <Pressable style={globalStyles.PrimaryButton} onPress={action}>
            <Text style={globalStyles.ButtonText}>{label}</Text>
        </Pressable>
    </View>
  )
}

export default PrimaryButton