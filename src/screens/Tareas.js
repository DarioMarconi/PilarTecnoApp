import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Icon} from '@rneui/themed';
import 'react-native-gesture-handler';
import  Header  from "../components/AppHeader"
import { useNavigation } from '@react-navigation/native';
import { Input, CheckBox, Button } from '@rneui/themed';
import { appSelector, appActions } from '../redux/appRedux';
import {useSelector, useDispatch} from "react-redux"


const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Tareas = () => {

  const dispatch = useDispatch();
  const todo = useSelector(appSelector.todo)
  const [text, setText]= useState("")
  
  const handleChange = (e) => {
    setText(e)
  }

  const addTask = () => {
    dispatch(appActions.addTodo({text: text, id: todo.length +1}))
    setText("")
  }

  const handleChecked = (e,id) => {
    dispatch(appActions.setCompletedTodo({id,completed: e}))
  }

  const delTask = (id) => {
    dispatch(appActions.deleteTodo(id))
  }

  const navigation = useNavigation()
  const navigateTo = (route) => {
      navigation.navigate(route)
  }

  return (
    <SafeAreaProvider>
      <ScrollView>
       <Header title= "Tareas"
           leftComponent={
            (
              <View style={styles.headerRight}>
                <TouchableOpacity
                 onPress={()=>navigateTo("Home")}
                  style={{ marginLeft: 10 }}
                >
                  <Icon type="antdesign" name="left" color="yellow" />
                </TouchableOpacity>
              </View>
            ) 
          }
          rightComponent={<Icon/>}
          />
        <View   style={{...styles.viewGrid}}>
          <View style={{flex:1, width:WIDTH}}>
            <Input
              placeholder='Nueva Tarea'
              value={text}
              onChangeText={(e)=>handleChange(e)}
            />
            <Button
             title="Agregar Nueva Tarea"
             buttonStyle={{ backgroundColor: "#183ed6" }}
              containerStyle={{
                marginBottom: 15,
              }}
              titleStyle={{ color: 'yellow', marginHorizontal: 20 }}
              onPress={()=> {
              if(!text){
                alert("Escribe una tarea, por favor")
              }else{
                addTask()
              }
              }
             }
            />
          </View>
          <View style={{flex:1, width:WIDTH,alignContent:"center"}} >
            {todo.map((t, index)=>
            <View key={t.id} style={{width:WIDTH, flexDirection:"row", justifyContent:"space-around"}}>
              <CheckBox 
                checked={t.completed}
                onPress={()=> handleChecked(!t.completed, t.id)}
              />
              <Text key={t.id} style={{textAlign:"left", fontSize:18,paddingTop:10}}>{t.text}</Text>
              <Icon type="font-awesome-5" name="trash" color="black" onPress={()=> delTask(t.id) } style={{marginTop:10}} />
            </View>
            )
            }
          </View>
        </View>
      </ScrollView>
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
    color:"black",
    fontSize: 24,
    fontWeight: "600",
    justifyContent:"center",
    alignItems: 'center'
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

export default Tareas;