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
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Botton, Stack} from '@rneui/themed';
import Header from '../components/AppHeader';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Home = () => {
    const navigation = useNavigation()
    const navigateTo = (route) => {
        navigation.navigate(route)
    }

  return (
    <SafeAreaProvider>
      <Header title= "Home"/>
      <ImageBackground style={{height:HEIGHT, width:WIDTH}} source={require("../assest/imagenes/fondo.jpg")}>
        <View style={{flexDirection:"row", flex:1}}>
          <View style={{...styles.viewGrid, justifyContent:"flex-end", paddingBottom:"5%"}}>
            <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6"}} onPress={()=>navigateTo("Profile")} >
              <Text style={styles.textButton}>PERFIL</Text>
            </TouchableOpacity>
          </View>
          <View style={{...styles.viewGrid, justifyContent:"flex-end", paddingBottom:"5%"}}>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6"}} onPress={()=>navigateTo("List")}>
              <Text style={styles.textButton}>LISTA</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:"row", flex:1}}>
          <View style={{...styles.viewGrid, justifyContent:"flex-start", paddingTop:"5%"}}>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6"}} onPress={()=>navigateTo("GoogleMaps")}>
              <Text style={styles.textButton}>MAPAS</Text>
            </TouchableOpacity>
          </View>
          <View style={{...styles.viewGrid, justifyContent:"flex-start", paddingTop:"5%"}}>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6"}} onPress={()=>navigateTo("Tareas")}>
              <Text style={styles.textButton}>TAREAS</Text>
            </TouchableOpacity>
          </View>
        </View>  
      </ImageBackground>

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
export default Home;