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

    constructor(props){
        super(props);
        this.state = {pontuacao: 0};
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
  }
 
  salvarDados(){
    let pontuacao = firebase.database().ref("pontuacao");
    pontuacao.child('002').child('ponto').set('150')
    .then(()=>{
        Alert.alert('pontuacao incluida com sucesso.');
      });;
  }

  listarDados(){
    let pontuacao = firebase.database().ref('pontuacao');
    pontuacao.on('value', (snapshot)=>{
      let ponto = snapshot.value;
      this.setState({
        pontuacao: ponto
      })
      
    });
  }

  render() {
    return (
      <View style={{flexDirection:'column'}}>
        <View style={{marginTop:20}}>
        <Button 
          onPress={()=>this.salvarDados()}
          title='Salvar dados'
          color='#841584'
        />

        </View>


        <View style={{marginTop:20}}>
          <Button title='Listar dados' 
          onPress={this.listarDados}
          color='#841584'
        />
        </View>
        <Text style={styles.txtPontos}>Ola mundo aqui estou no linux - {this.state.pontuacao}</Text>
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