import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import ChatRoomScreen from './screens/ChatRoomScreen';
import ChatListScreen from './screens/ChatListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatList"
          component={ChatListScreen}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={{headerShown: false}}
        />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}