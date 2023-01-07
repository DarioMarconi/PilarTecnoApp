import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './tabs';
import Login from '../screens/Login';
import Tareas from '../screens/Tareas';
import ListDetail from '../screens/ListDetail';
import {useSelector} from "react-redux";
import { appSelector } from '../redux/appRedux';

const Stack = createStackNavigator();

export const AppStack = () => {

    const user = useSelector(appSelector.user)

  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
        {
            user?
            <Stack.Screen name="Main" component={Tabs} />
            :
            <Stack.Screen name="Login" component={Login} />
        }
    <Stack.Screen name="Tareas" component={Tareas} />
    <Stack.Screen name="Detail" component={ListDetail} />
    </Stack.Navigator>
  );
}