import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/splash';
import HomeScreen from './screens/home';
import QuoteScreen from './screens/quote';
import SearchScreen from './screens/search';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{
      headerShown: false,}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{
      headerShown: false,}}/>
      <Stack.Screen name="Quote" component={QuoteScreen} options={{
      headerShown: false,}}/>
      <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}