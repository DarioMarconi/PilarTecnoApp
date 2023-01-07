import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { appSelector, appActions } from '../redux/appRedux';
import {useSelector, useDispatch} from "react-redux"
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Profile = () => {

  const navigation = useNavigation()
  const navigateTo = (route) => {
    navigation.navigate(route)
}
  
  const user = useSelector(appSelector.user)

  return (
    <SafeAreaProvider>
      <ImageBackground style={{height:"100%", width:"101%"}} source={require("../assest/imagenes/fondo-perfil.jpg")}>

      <View style={{flexDirection:"row", flex:1, alignItems:"center"}} >
        <View style={{flexDirection:"column", flex:0.5}}>

        <Image style={{width: 160,height: 160, marginBottom:100,marginLeft:-10}}
         className="pokemon-img"
          source={require("../assest/imagenes/avatar.png")}   
        />
        </View>
        <View style={{marginRight:-490, marginBottom:30, flex:1, flexDirection:"column"}}>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#85c42f",  marginBottom:10}}>
            <Text style={{...styles.textButton, fontFamily:"Game-font",textTransform: 'uppercase'}}>{user.name} {user.lastname}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#85c42f", marginBottom:10 }}>
            <Text style={{...styles.textButton, fontFamily:"Game-font.tt"}}>Developer MERN stack</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6", marginBottom:10 }}>
            <Text style={{...styles.textButton, fontFamily:"PressStart2P-Regular"}}>Base Experience: 27</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6", marginBottom:10,   }}>
            <Text style={{...styles.textButton, fontSize:14}}>darioenriquemarconi@gmail.com</Text>
          </TouchableOpacity>   
        </View>
        
        <View style={{marginBottom:-500, marginLeft:0, position:"relative"}}>
        <TouchableOpacity onPress={()=>navigateTo("Home")} >
        <Image
         
         style={{ width:331, height:125, borderRadius:20, marginRight:35}} source={require("../assest/imagenes/Botonvolver.png")}   
        />
                
            <Text style={{...styles.textButton, fontFamily:"Game-font",textTransform: 'uppercase', position:"absolute",marginLeft:135, marginTop:60}}>Volver atras ! </Text>
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
    color: "black",
    fontSize:18,
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
    borderWidth: 3, 
    borderColor:"black" ,
    borderRadius: 8,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#606060",
    width: WIDTH*.5,
    height: WIDTH*.2,
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

export default Profile;