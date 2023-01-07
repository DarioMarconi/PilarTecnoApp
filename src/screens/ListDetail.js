import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Botton, Stack, ListItem, Avatar} from '@rneui/themed';
import  Header  from "../components/AppHeader"
import api, {IMG_URL} from '../services/api'
import {useSelector, useDispatch} from "react-redux";
import {appSelector, appActions} from '../redux/appRedux';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ListDetail = (props) => {
  const { url } = props.route.params.data
  const dispatch = useDispatch()
  const [pokemon, setPokemon] = useState(null)

  const fetchData = async () => {
    try {
        dispatch(appActions.loading(true))
        const result = await api.GET(url)
        if(result){
            console.log('poke data: ', result)
            setPokemon(result)
        }
    } catch (error) {
        console.log(error)
    } finally {
     dispatch(appActions.loading(false))
        }
};

  useEffect(()=>{
    fetchData()
  },[] )

  const getPokemonImgId = (id) => {
    console.log('long. '+id.length)
    switch (id.length) {
    case 1:
    return `00${id}`
    case 2:
    return `0${id}`
    default:
    return id
    }
}

  return (
    <SafeAreaProvider>
       <Header title= "Pokedex"/>
        <Text>Detalle</Text>
            <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6"}}>
            </TouchableOpacity>
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
export default ListDetail;