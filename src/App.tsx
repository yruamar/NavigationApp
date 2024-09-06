import { NavigationContainer } from "@react-navigation/native"
import { DrawerNavigator } from "./presentation/routes/DrawerNavigator"
import { BottomTabsNavigator } from "./presentation/routes/BottomTabsNavigator"

 
export const App = () => {
  return (
    <NavigationContainer >
      <BottomTabsNavigator />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
  )
}
