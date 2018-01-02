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
    var email= "werlitoncarlos@gmail2.com";
    var senha = "letox123";
    let usuario = firebase.auth();

    usuario.createUserWithEmailAndPassword(email, senha)
    .catch(
      (erro)=>{
        Alert.alert(erro.message);
      }
    );

  }

  verificarUsuarioLogado(){
    let usuario = firebase.auth();
    // Verificar qqr mudança de estado no usuário logado
    // Forma mais recomendada
    usuario.onAuthStateChanged(
      (usuarioAtual)=>{
         if (usuarioAtual) {
          Alert.alert('Usuario logado');
        } else {
          Alert.alert('Usuario não esta logado');
        }
      }
    );   
  }

  deslogarUsuario(){
    let usuario = firebase.auth();
    usuario.signOut();
  }

  logarUsuario(){
    var email= "werlitoncarlos@gmail2.com";
    var senha = "letox133";
    let usuario = firebase.auth();

    usuario.signInWithEmailAndPassword(email, senha)
    .catch(
      (erro)=>{
        Alert.alert(erro.message);
      }
    );

  }
 
  render() {
    return (
      <View style={{flexDirection:'column'}}>

        <View style={{marginTop:20}}>
          <Button title='Cadastrar usuário' 
          onPress={this.cadastrarUsuario}
          color='#841584'
        />
        </View>
       
        <View style={{marginTop:20}}>
          <Button title='Verificar usuario logado' 
          onPress={this.verificarUsuarioLogado}
          color='#841584'
        />
        </View>

        <View style={{marginTop:20}}>
          <Button title='Deslogar usuario' 
          onPress={this.deslogarUsuario}
          color='#841584'
        />
        </View>

        <View style={{marginTop:20}}>
          <Button title='Logar usuario' 
          onPress={this.logarUsuario}
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