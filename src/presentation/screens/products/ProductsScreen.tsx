import { View, Text } from "react-native"
import { globalStyles } from "../../theme/theme"
import { FlatList } from "react-native-gesture-handler"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { type NavigationProp, useNavigation } from "@react-navigation/native"
import { type RootStackParam } from "../../routes/StackNavigatior"

const products = [
  { id: 1, name:' Producto 1'  },
  { id: 2, name:' Producto 2'  },
  { id: 3, name:' Producto 3'  },
  { id: 4, name:' Producto 4'  },
  { id: 5, name:' Producto 5'  },
  { id: 6, name:' Producto 6'  },
]

export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParam>>();
  
  return (
    <View style={globalStyles.container} >
      <Text  style={globalStyles.textTitulo} >Productos</Text>
      <FlatList 
        data={products}
        renderItem={ ({item})=> (
          <PrimaryButton onPress={ () => navigation.navigate('Product',  { id: item.id, name: item.name   } ) } label={ `${item.id}` }  />
          )}
        />
      <Text  style={globalStyles.textTitulo} >Ajustes</Text>
      <PrimaryButton onPress={ () => navigation.navigate('Settings')} label='Ajustes'  />
    </View>
  )
}
