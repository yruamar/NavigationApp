import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { View, Text } from "react-native"
import { RootStackParam } from "../../routes/StackNavigatior";
import { globalStyles } from "../../theme/theme";
import { useEffect } from "react";

export const ProductScreen = () => {
  const params =  useRoute<RouteProp<RootStackParam, 'Product'>>().params;
  console.log(params);
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  

  }, [])
  
  return (
    <View style={ globalStyles.container } >
        <Text style={ globalStyles.textTitulo } >ProductScreen</Text>
        <Text style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop:20
          }} >
           {params.id} - {params.name} 
        </Text>
    </View>
  )
}
