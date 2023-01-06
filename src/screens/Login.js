import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Button, Stack} from '@rneui/themed';
import 'react-native-gesture-handler';
import {useDispatch} from "react-redux";
import { appActions} from '../redux/appRedux';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Login = () => {
  
  const dispatch = useDispatch()
  const setAuth = () => {
    dispatch(appActions.setUser({name:"Dario", lastname:"Marconi"}))
  }

  return (
    <SafeAreaProvider>

        <View style={{...styles.viewGrid, justifyContent:"center", paddingBottom:"5%"}}>
            <Button title="Ingresar" onPress={() => setAuth()} loadingProps={{ size: 'small', color: 'yellow' }}
              buttonStyle={{
                backgroundColor: '#183ed6',
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 100,
                width: 250,
                marginVertical: 10,
              }}/>
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
    fontSize:18,
    fontWeight:"400",
  },
  highlight:{
    fontWeight:"700",
  },
});

export default Login;