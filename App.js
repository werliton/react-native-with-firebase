import React, { Component } from 'react';
import firebase from 'firebase';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button, Alert
} from 'react-native';

export default class App extends Component<{}> {

  
  componentWillMount(){
       // Initialize Firebase
      var config = {
        apiKey: "AIzaSyCwe06XI-1bic6nAqWyyKUOqqdqrBMzLNs",
        authDomain: "configuracaoreact.firebaseapp.com",
        databaseURL: "https://configuracaoreact.firebaseio.com",
        projectId: "configuracaoreact",
        storageBucket: "",
        messagingSenderId: "1033359965567"
      };
     firebase.initializeApp(config);
  }

  verificarUsuarioLogado(){
    let usuario = firebase.auth();
    const usuarioAtual = usuario.currentUser;

    if (usuarioAtual) {
      Alert.alert('Usario logado');
    } else {
      Alert.alert('Usario não esta logado');
    }
  }
 
  render() {
    return (
      <View style={{flexDirection:'column'}}>
       
        <View style={{marginTop:20}}>
          <Button title='Verificar usuario logado' 
          onPress={this.verificarUsuarioLogado}
          color='#841584'
        />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  txtPontos:{
    fontSize: 20,
    color: 'red',
    fontWeight:'bold'
  }
});