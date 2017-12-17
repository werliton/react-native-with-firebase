import React, { Component } from 'react';
import firebase from 'firebase';
import {
  Platform,
  StyleSheet,
  Text,
  View
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

  render() {
    return (
      <View>
        <Text>Meu app</Text>

      </View>
    );
  }
}
