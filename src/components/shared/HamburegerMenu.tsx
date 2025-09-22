import { Pressable, Text } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export default function HamburgerMenu() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        >
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);

  return <></>;
}
