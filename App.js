import React, { Component } from 'react';
import firebase from 'firebase';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component<{}> {
    var database ;

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
      this.database = firebase.database().ref('funcionarios');
  }

  salvarDados(){
    let database = firebase.database();
    database.ref('pontuacao').set('199');
  }

  atualizaDados(){

  }

  render() {
    return (
      <View>
        <Button 
          onPress={()=>{this.salvarDados;}}
          title='Salvar dados'
          color='#841584'
        />
        <Text>Meu app</Text>
      </View>
    );
  }
}
