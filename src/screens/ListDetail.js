import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList, ScrollView,ImageBackground
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import  Header  from "../components/AppHeader"
import api, {IMG_URL} from "../services/api"
import {useSelector, useDispatch} from "react-redux"
import { appSelector, appActions } from '../redux/appRedux';
import { ListItem, Avatar } from 'react-native-elements'
import { Image } from 'react-native-elements';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ListDetail = (props) => {

  const navigation = useNavigation()
  const navigateTo = (route) => {
    navigation.navigate(route)
}

  const {url} = props.route.params.data
  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState(null);

  const fetchData = async () => {
		try {
			dispatch(appActions.loading(true));
			const result = await api.GET(url);
			if (result) {
        console.log("poke data: ", result)
				setPokemon(result);
			}
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(appActions.loading(false));
		}
	};

  useEffect(() =>{
    fetchData()
  },[])

  /*const getPokemonImgId = (id) => {
    console.log("long. "+id.length)
		switch (id.length) {
			case 1:
				return `00${id}`;
			case 2:
				return `0${id}`;
			default:
				return id;
		}
	};
*/

  const BASE_URI = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';  

  return (
    <SafeAreaProvider>
      <ImageBackground style={{height:"100%", width:"101%"}} source={require("../assest/imagenes/fondo1.jpg")}>

      <View style={{flexDirection:"row", flex:1, alignItems:"center"}} >
        <View style={{flexDirection:"column", flex:0.5}}>

        <Image style={{width: 160,height: 160, marginBottom:190,marginLeft:-10}}
         className="pokemon-img"
          source={{ uri: BASE_URI + pokemon?.id + ".png" }}   
        />
        </View>
        <View style={{marginRight:-480, marginBottom:30, flex:1, flexDirection:"column"}}>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#85c42f",  marginBottom:10}}>
            <Text style={{...styles.textButton, fontFamily:"Game-font",textTransform: 'uppercase'}}>{pokemon?.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#85c42f", marginBottom:10 }}>
            <Text style={{...styles.textButton, fontFamily:"Game-font.tt"}}>Base experience: {pokemon?.base_experience}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6", marginBottom:10 }}>
            <Text style={{...styles.textButton, fontFamily:"PressStart2P-Regular"}}>Type {pokemon?.types[0].type.name}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6", marginBottom:10 }}>
            <Text style={{...styles.textButton, fontFamily:"Game-font", textTransform:"capitalize"}}>Weight {pokemon?.weight/10} Kg</Text>
          </TouchableOpacity>   
        </View>
        
        <View style={{marginBottom:-500, marginLeft:0, position:"relative"}}>
        <TouchableOpacity onPress={()=>navigateTo("List")} >
        <Image
         
         style={{ width:331, height:125, borderRadius:20, marginRight:20}} source={require("../assest/imagenes/Botonvolver.png")}   
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

export default ListDetail;