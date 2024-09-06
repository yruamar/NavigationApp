import { useNavigation, DrawerActions } from '@react-navigation/native';
import { View, Text, Pressable } from "react-native"
import { useEffect } from 'react';

export const Tab1Screen = () => {

  const navigation = useNavigation();


  useEffect( () => {
    navigation.setOptions( {
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch( DrawerActions.openDrawer ) }>
          <Text>Menú</Text>
        </Pressable>
      )
    } );
  }, [] );
  
  return (
    <View>
        <Text>Hola Tab1Screen</Text>
    </View>
  )
}
