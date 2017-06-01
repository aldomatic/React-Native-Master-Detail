import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 10,
    backgroundColor: '#260047',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {
    color: '#D20A4B',
    fontSize: 24,
    padding:10,
    textAlign:'center',
    marginTop:10
  },
  text:{
    color:'white',
    fontSize:16,
    textAlign:'center',
    padding:5
  }
});

export default class DetailView extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    //title: navigation.state.params.data.name,
    title: 'Details',
    headerTitleStyle:{
      color: 'white'
    },
    headerStyle: {
     backgroundColor:'#D20A4B'
   }
 });
  render() {
    const { params } = this.props.navigation.state;
    return(
      <View style={styles.container}>
        <View style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
          <Image
            source={require('../assets/profile.png')}
            style={{width: 128, height: 128, margin: 10}}
            />
          <Text style={styles.name}>{params.data.name}</Text>
          <Text style={styles.text}>Sex: {params.data.gender}</Text>
          <Text style={styles.text}>Height: {params.data.height}</Text>
          <Text style={styles.text}>Hair Color: {params.data.hair_color}</Text>
        </View>

      </View>
    );
  }
}
