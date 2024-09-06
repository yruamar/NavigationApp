import { View, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../theme/theme";

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation() 

  return (
    <View style={{
      flex:1,
      marginHorizontal: 20,
      marginTop: top+5
    }} >
        <Text style={ globalStyles.textTitulo  }  >Hola profileScreen</Text>
        <PrimaryButton 
          onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer  )}  
          label="Abrir menú"
        />
    </View>
  )
}
