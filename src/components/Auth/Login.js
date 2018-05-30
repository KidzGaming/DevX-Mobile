import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  login(){
    const { username, password } = this.state;
    fetch(`http://localhost/users/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: {
        username: username,
        password: password
      }
    });
  }
  render(){
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});