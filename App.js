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

  cadastrarUsuario(){
    let usuario = firebase.auth();
    let email = 'werliton.carlos@gmail.com';
    let senha = 'leto123';

    usuario.createUserWithEmailAndPassword(email, senha)
    .catch(
      (erro) =>{
        // possibilidade do obj erro
        // erro.code, erro.message
        Alert.alert(erro.message);
      }
    );
  }
 
  render() {
    return (
      <View style={{flexDirection:'column'}}>
       
        <View style={{marginTop:20}}>
          <Button title='Cadastrar usuario' 
          onPress={this.cadastrarUsuario}
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