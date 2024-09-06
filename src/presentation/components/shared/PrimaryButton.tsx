import { Pressable, Text } from "react-native"
import { globalStyles } from "../../theme/theme"
//   const navigation = useNavigation();
interface Props{
    label: String,
    onPress: () => void

}
export const PrimaryButton = ({
    label,
    onPress
} :Props ) => {
  return (
    <Pressable 
        onPress={onPress }
        
        style={ globalStyles.primaryButton}  >

          <Text style={ globalStyles.buttonText} >{label}</Text>
        </Pressable>
  )
}
