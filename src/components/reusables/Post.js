import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons/Ionicons';

export default class Post extends Component {
  addLike(){
    
  }
  render(){
    const { id, author, username, text, likesCount, commentsCount } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <Text>{authorName}</Text>
            <Text>{authorUsername}</Text>
          </View>
          <View style={styles.postContent}>
            <Text>{text}</Text>
          </View>
        </View>
        <View style={styles.postActions}>
          <TouchableOpacity onPress={this.addLike}>
            <Ionicons />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigate('Comments', { id: id }) }>
          </TouchableOpacity>
          <TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

let { width, height } = Dimensions.get('window'); 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    width: width - 20
  },
  postContainer: {},
  postHeader: {},
  postContent: {},
  postActions: {}
});