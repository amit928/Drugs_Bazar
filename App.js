import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Components.js/Login';
import Register from './views/Components.js/Register';
import Home from './views/Components.js/Home';
import { Provider } from 'react-redux';
import configureStore from './views/Redux/configureStore';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './views/Rootnavigation';
import Sidebar from './views/Common/Sidebar';
import SplashScreen from './views/Components.js/SplashScreen';

const Stack = createNativeStackNavigator();
const store = configureStore()
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} />

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export function MyDrawer(props) {
  return (
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home" 
      // drawerContent={() => <Sidebar {...props} />} 
      screenOptions={{headerShown: false}}
      >
        <Drawer.Screen name="Home" component={Home}  />
      </Drawer.Navigator>
  );
}