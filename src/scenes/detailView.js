import React, { Component } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 15,
    backgroundColor: '#260047',
    flexDirection: 'column'
  },
  text:{
    color:'white'
  }
});

export default class DetailView extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTintColor: 'white',
    title: navigation.state.params.data.name,
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
        <Text style={styles.text}>{params.data.name}</Text>
        <Text style={styles.text}>{params.data.gender}</Text>
      </View>
    );
  }
}
