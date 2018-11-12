import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Settings extends React.Component{
	render(){
		return(
			<View style={styles.container}>
                <Text style={masa.sih}>PADA HARI MINGGU KU TURUT TEMAN PERGI</Text>
                <Text style={masa.sih}>KE TEMPAT TONGKRONGAN KU DUDUK DI SAMPING CASAN</Text>
                <Text style={masa.sih}>KU DUDUK DENGAN MANIS SAMBIL BERMAIN MOBILE LEGENDS, EYY</Text>
                <Text style={masa.sih}>SLAIN SLAIN SLAIN SLAIN SLAIN SLAIN SLAAAIN !!!!!!</Text>
				<Text style={{ marginBottom : 100}}></Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3300FF',
  }
});
const gambar = {
	edit : {
		borderRadius : 110,
		marginTop : 20,
		marginBottom : 10,
		width : 180,
		height : 175,
	}
}
const warna = {
	yoi : {
		color : "#fff",
		fontSize : 20,
		fontWeight : 'bold',
	}
}
const masa = {
	sih : {
		color : "#fff",
		fontSize : 14,
	}
}