/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Button, Stack,Avatar, Icon} from '@rneui/themed';
import 'react-native-gesture-handler';
import  Header  from "../components/AppHeader"
import { appSelector, appActions } from '../redux/appRedux';
import {useSelector, useDispatch} from "react-redux"

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Profile = () => {
  
  const user = useSelector(appSelector.user)

  return (
    <SafeAreaProvider>
        <Header title= "Profile" rightComponent={<Icon/>}/>
          <View style={{...styles.viewGrid,flexDirection:"row", flex:1}}>
            <Avatar
              size={60}
              rounded
              source={ require("../assest/imagenes/avatar.png")}
              />
              <Text style={{...styles.selectionDescription, marginLeft: 10}}>{user.name} {user.lastname}</Text>
          </View>
          <View>
            <Text style={{textAlign:"center", fontSize:18,paddingTop:10}}>darioenriquemarconi@gmail.com</Text>
          </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  textButton: {
    justifyContent: "center",
    color: "yellow",
    fontSize:20,
    fontWeight:"700",
  },
  viewGrid: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  buttonGrid:{
    borderRadius: 8,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#606060",
    width: WIDTH*.4,
    height: WIDTH*.4,
    opacity:.8
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal:24,
  },
  selectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  selectionDescription:{
    marginTop:8,
    fontSize:30,
    fontWeight:"400",
  },
  highlight:{
    fontWeight:"700",
  },
});

export default Profile;