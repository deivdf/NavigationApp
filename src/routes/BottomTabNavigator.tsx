import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsScreen } from '../screens/tabs/tabsScreen';
import { TabsScreen2 } from '../screens/tabs/tabsScreen2';
import { TabsScreen3 } from '../screens/tabs/tabsScreen3';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: globalColors.background }}
      screenOptions={{
        //headerShown: false
        tabBarLabelStyle: { marginBottom: 5 },
        headerStyle: {
          elevation: 0,
          borderColor: 'trasparent',
          shadowColor: 'trasparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab1</Text>,
        }}
        component={TabsScreen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab2</Text>,
        }}
        component={TabsScreen2}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => <Text style={{ color }}>Tab3</Text>,
        }}
        component={TabsScreen3}
      />
    </Tab.Navigator>
  );
}
