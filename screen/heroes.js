import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Heroes extends React.Component{
  render(){
    return(
      <View style={nbStyles.subtitle}>
          <Text style={{fontSize: 25, marginTop:20, textAlign: 'center', color: 'black', fontWeight : 'bold'}}>
            HEROES
          </Text>

          <Image
           style={{alignItems: 'center', width: 370, height:370, marginBottom: 20, marginTop:20, }}
            source={require('./1.jpg')}
          />

        </View>
    );
  }
}

const nbStyles = {
    subtitle: {
      backgroundColor: '#3300FF',

    },
    btn: {
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 25,
    },
}