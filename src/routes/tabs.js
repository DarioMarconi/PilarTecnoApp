import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from "@react-navigation/stack"
import Home from "../screens/Home"
import Profile from "../screens/Profile"
import GoogleMaps from '../screens/GoogleMaps';
import List from '../screens/List';
import ListDetail from '../screens/ListDetail';
import { Icon } from '@rneui/base';

const Tab = createMaterialBottomTabNavigator();
const TAB_COLOR = "#183ed6"

const HomeStack= createStackNavigator();

/*const ListScreen = () => {
    const sesion = true
    return(
        <HomeStack.Navigator screenOptions= {{headerShown:false}}>
            <HomeStack.Screen name="List" component={List}/>
            <HomeStack.Screen name="Detail" component={ListDetail}/>
        </HomeStack.Navigator>
    )
}
*/

const Tabs = () => {
  return (
    <Tab.Navigator
    
        barStyle = {{backgroundColor: TAB_COLOR}}
    >
        <Tab.Screen name="Home" component={Home} 
        options={{
            tabBarLabel:"Home",
            tabBarIcon: ({color}) => (
                <Icon
                    name="home"
                    type="font-awesome-5"
                    color="black"
                />
            ),
        }}/>
        <Tab.Screen name="Profile" component={Profile}
        options={{
            tabBarLabel:"Profile",
            tabBarIcon: ({color}) => (
                <Icon
                    name="user"
                    type="font-awesome-5"
                    color="black"
                />
            ),
        }}
         />
        <Tab.Screen name="List" component={List}
        options={{
            tabBarLabel:"Listas",
            tabBarIcon: ({color}) => (
                <Icon
                    name="list"
                    type="font-awesome-5"
                    color="black"
                />
            ),
        }}
        />
        <Tab.Screen name="GoogleMaps" component={GoogleMaps}
        options={{
            tabBarLabel:"Map",
            tabBarIcon: ({color}) => (
                <Icon
                    name="map"
                    type="font-awesome-5"
                    color="black"
                />
            ),
        }}
        />
    </Tab.Navigator>
  );
}

export default Tabs;