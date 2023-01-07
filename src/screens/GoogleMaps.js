import React,  {useState, useRef, useEffect}  from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Icon} from '@rneui/themed';
import 'react-native-gesture-handler';
import  Header  from "../components/AppHeader"
import Geolocation from 'react-native-geolocation-service';
import { hasLocationPermission } from '../LocationPermission';
import MapView, { Marker, enableLatestRenderer } from 'react-native-maps';
import { Image } from 'react-native-elements';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ASPECT_RATIO = width / height;
const LATITUDE = -33.3018708;
const LONGITUDE = -66.3298548
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GoogleMaps = () => {

  const [region,setRegion]= useState({
    latitude:LATITUDE,
    longitude:LONGITUDE,
    latitudeDelta:LATITUDE_DELTA,
    longitudeDelta:LONGITUDE_DELTA,
  });

  const mapRef =useRef()

  useEffect(()=>{
    _getLocation()
  },[])

  const _getLocation = async ()=>{
    await Geolocation.getCurrentPosition(
    async posicion => {
    const longitude = posicion.coords.longitude;
    const latitude = posicion.coords.latitude;
    
    mapRef.current.animateToRegion(
      {
        latitude,
        longitude,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta
      },
      1000
      );
    
    setRegion({...region, longitude,latitude})
    },
    (error) => {
    console.log(error.code, error.message);
    },
    {
    accuracy: {
    android: 'high',
    ios: 'best',
    },
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 10000,
    distanceFilter: 0,
    forceRequestLocation: true,
    }
    )
    }

    const fitCoordinates = async () => {
     console.log('centrando mapa')
      _getLocation()
    }

    const onRegionChange= (r) => {
      setRegion({...region,r})
    }

  return (
    <SafeAreaProvider>
      <Header title= "GoogleMaps"/>
      <View style={{flex:1}}>
        <MapView
          ref={mapRef}
          mapType='standard'
          style={styles.map}
          initialRegion={region}
          // region={this.state.region}
          onRegionChangeComplete={onRegionChange}
        />
        <View style={{position:'absolute', flexDirection:'row',
          backgroundColor:'white', borderRadius:100, width:width/10, alignSelf:'flex-end',
          margin:20, marginRight:30, alignItems:'center', justifyContent:'center'}}>
          <Icon
            name="crosshairs"
            type="font-awesome"
            color='#cc81c5'
            size={width/10}
            onPress={() => fitCoordinates()}
          />
        </View>
      <View style={styles.markerFixed}>
      <Image style={styles.marker} source={require('../assest/imagenes/gps.png')}
      />
    </View>
      <View style={styles.footer}>
        <Text style={styles.region}>longitud:
        {JSON.stringify(region.longitude)}{"\n"}latitud:
        {JSON.stringify(region.latitude)}</Text>
      </View>
    </View>
  </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  text: {
  fontSize:30,
  fontWeight:'bold',
  textAlign:'center'
  },
  content: {
  margin: width/20,
  height:width/2.5,
  width:width/2.5,
  borderRadius:15,
  justifyContent:'center',
  },
  markerFixed: {
  left: '50%',
  marginLeft: -24,
  marginTop: -48,
  position: 'absolute',
  top: '50%'
  },
  map: {
  ...StyleSheet.absoluteFillObject,
  width,
  height,
  alignSelf:'center'
  },
  marker: {
  height: 48,
  width: 48
  },
  footer: {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  bottom: 30,
  position: 'absolute',
  width: '100%'
  },
  region: {
  color: '#fff',
  lineHeight: 20,
  margin: 20,
  alignSelf:'center'
  }
  })

export default GoogleMaps;