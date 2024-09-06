import { createDrawerNavigator,  DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigatior } from './StackNavigatior';
import { ProfileScreen } from '../screens/profile/profileScreen';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';

const Drawer = createDrawerNavigator();
export const  DrawerNavigator = () => {
  const dimensions = useWindowDimensions();



  return (
    <Drawer.Navigator
      drawerContent={ (props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown:false,
        drawerType: dimensions.width >= 750 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: globalColors.background,
        drawerItemStyle:{
          borderRadius:100,
          paddingHorizontal:20
        }

      }}
    >
      <Drawer.Screen name="StackNAvigator" component={StackNavigatior} />
      <Drawer.Screen name="prfile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
const CustomDrawerContent = (props: DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>
      <View style={{
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50
      }} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}