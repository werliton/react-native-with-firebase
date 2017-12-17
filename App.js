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
    let senha = '';

    usuario.createUserWithEmailAndPassword(email, senha)
    .catch(
      (erro) =>{
        var errors = ['auth/weak-password','auth/expired-action-code','auth/invalid-action-code'];
        var errorsTranslate = [
        'A senha deve ter mais que 6 caracteres',
        'A senha expirou','Senha inválida'];
        var messageError = '';
        //if(errors.indexOf(erro.code) != -1){
          //Pegando a mensagem referente ao codigo de retorno no erro
          messageError = errorsTranslate[errors.indexOf(erro.code)];
        //}
        // possibilidade do obj erro
        // erro.code, erro.message
        Alert.alert(messageError);
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