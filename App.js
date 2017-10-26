import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; // npm module for user Authentication
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      // authentication info here
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
