import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import configureStore from './views/Redux/configureStore';
import { navigationRef } from './views/navigation/Rootnavigation';
import SplashScreen from './views/screens/SplashScreen';
import Login from './views/screens/Login';
import Register from './views/screens/Register';
import Home from './views/screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Invoice from './views/screens/Invoice';
import ShortExpiry from './views/screens/ShortExpiry';
import ExpiryProduct from './views/screens/ExpiryProduct';
import DistributorList from './views/screens/DistributorList';
import Loader from './views/common/Loader';
import DistributorProduct from './views/screens/DistributorProduct';
import Profile from './views/screens/Profile';
import SalesInvoice from './views/screens/SalesInvoice';

const Stack = createNativeStackNavigator();
const store = configureStore()
// const Drawer = createDrawerNavigator();

export default function App() {


  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <Loader />
        <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Invoice" component={Invoice} options={{ headerShown: false }} />
          <Stack.Screen name="ShortExpiry" component={ShortExpiry} options={{ headerShown: false }} />
          <Stack.Screen name="ExpiryProduct" component={ExpiryProduct} options={{ headerShown: false }} />
          <Stack.Screen name="DistributorList" component={DistributorList} options={{ headerShown: false }} />
          <Stack.Screen name="DistributorProduct" component={DistributorProduct} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="SalesInvoice" component={SalesInvoice} options={{ headerShown: false }} />

          {/* <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} /> */}

        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

// export function MyDrawer(props) {
//   return (
//     <Drawer.Navigator useLegacyImplementation initialRouteName="Home"
//       // drawerContent={() => <Sidebar {...props} />}
//       screenOptions={{ headerShown: false }}
//     >
//       <Drawer.Screen name="Home" component={Home} />
//     </Drawer.Navigator>
//   );
// }
