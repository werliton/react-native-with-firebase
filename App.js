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

    constructor(props){
        super(props);
        var database
    }

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
     //-> First way to save data
    this.database.chid('001').child('nome').set('werliton');

    //-> Second way to save data
    // push() generate cod random of insertion
    this.database.push().child('nome').set('Lucas');

    // Thrist way to save using push()
    // here save an object literal
    this.database.push().set({
        name: 'Werliton',
        age: 28
    });
  }

  atualizaDados(){
    // Para atualizar dados basta usar o mesmo metodo set()
     // acessar o cod identificador
      // here update the name Werliton, save before, for Carlos
     this.database.child('001').child('nome').set('Carlos');
  }

  removerDados(){

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
