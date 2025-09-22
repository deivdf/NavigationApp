import { Text, View } from 'react-native';
import HamburgerMenu from '../../components/shared/HamburegerMenu';
//import { DrawerActions, useNavigation } from '@react-navigation/native';
//import { useEffect } from 'react';

export const TabsScreen = () => {
  // const navigate = useNavigation();

  // useEffect(() => {
  //   navigate.setOptions({
  //     headerLeft: () => (
  //       <Pressable
  //         onPress={() => navigate.dispatch(DrawerActions.toggleDrawer)}
  //       >
  //         <Text>Menu</Text>
  //       </Pressable>
  //     ),
  //   });
  // }, []);

  return (
    <View>
      <Text>Tabs Screen</Text>
      <HamburgerMenu />
    </View>
  );
};
