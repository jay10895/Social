import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  BackHandler,
  TouchableOpacity,
  Image,
} from 'react-native';

import Header from '../Screens/Header';

export default class Import extends Component {
    render(){
        return(
            <View style={styles.container}>
                 <Header title={"Add"} />
                <Text>Import</Text>
    
            </View>
        );
    }
    }
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            borderBottomColor:'#ffffff',
            backgroundColor: '#ffffff'
        },
    });