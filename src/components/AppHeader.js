/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  TurboModuleRegistry,
} from 'react-native';

import { Header, Icon, Avatar } from '@rneui/themed';

const AppHeader = (props) => {
  const {title = "Pilar Tecno", rightComponent, leftComponent} =props
return (

  <Header
    
    backgroundColor="#042ed4" 
    leftComponent={leftComponent?leftComponent:null}
    rightComponent={rightComponent?rightComponent:
      (
        <View style={styles.headerRight}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
          <Avatar
            size={32}
            rounded
            source={ require("../assest/imagenes/avatar.png") }
            />
          </TouchableOpacity>
        </View>
      )
    }
    centerComponent={{ text: title, style: styles.heading }}
  />
);
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'yellow',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'yellow',
    fontSize: 16,
    fontWeight: 'bold',
  },
  });
  export default AppHeader;