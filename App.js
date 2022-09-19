import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import configureStore from './views/Redux/configureStore';
import { navigationRef } from './views/Rootnavigation';
import SplashScreen from './views/screens/SplashScreen';
import Login from './views/screens/Login';
import Register from './views/screens/Register';
import Home from './views/screens/Home';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const store = configureStore()
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} /> */}

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

// export function MyDrawer(props) {
//   return (
//       <Drawer.Navigator useLegacyImplementation initialRouteName="Home" 
//       // drawerContent={() => <Sidebar {...props} />} 
//       screenOptions={{headerShown: false}}
//       >
//         <Drawer.Screen name="Home" component={Home}  />
//       </Drawer.Navigator>
//   );
// }
