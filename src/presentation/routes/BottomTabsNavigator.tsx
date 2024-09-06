import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen ';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors, globalStyles } from '../theme/theme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: globalColors.background
        }}
        screenOptions={{
        //    headerShown: false,
        tabBarLabelStyle:{
            marginBottom:5
        },
        headerStyle: {
            elevation: 0,
            borderColor: 'transparent',
            shadowColor: 'transparent'
        },
        tabBarStyle: {
            borderWidth: 0,
            elevation: 0
        }

        }}

    >
      <Tab.Screen name="Tab1" options={{ title: 'Tab - 1', tabBarIcon : ({color}) => (<Text style={{ color  }} >Tab - 1</Text>)  }}  component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{ title: 'Tab - 2', tabBarIcon : ({color}) => (<Text style={{ color  }}>Tab - 2</Text>)  }}  component={Tab2Screen} />
      <Tab.Screen name="Tab3" options={{ title: 'Tab - 3', tabBarIcon : ({color}) => (<Text style={{ color  }}>Tab - 3</Text>)  }}  component={Tab3Screen} />
    </Tab.Navigator>
  );
}