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
import {Botton, Stack} from '@rneui/themed';
import 'react-native-gesture-handler';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Login = () => {

  return (
    <SafeAreaProvider>

        <View style={{...styles.viewGrid, justifyContent:"flex-end", paddingBottom:"5%"}}>
            <TouchableOpacity style={{...styles.buttonGrid, backgroundColor:"#183ed6"}}>
                <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>
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