import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const Rides=() => {
  return (
    <SafeAreaView className='flex-1 items-center justify-center' >
        <Text>Rides</Text>
    </SafeAreaView>
  );
}
export default Rides ;
