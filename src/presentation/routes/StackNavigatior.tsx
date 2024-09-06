import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';


export type  RootStackParam = {
  Home: undefined,
  Products: undefined,
  Product: { id:number, name: string },
  Settings: undefined,

}

const Stack = createStackNavigator<RootStackParam>();



export const  StackNavigatior = () => {
  return (
    <Stack.Navigator screenOptions={{
       headerStyle:{
        elevation: 10,
        shadowColor: 'red'
       }
      }}>
      <Stack.Screen  name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}