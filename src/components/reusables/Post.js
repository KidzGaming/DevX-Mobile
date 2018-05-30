import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity onPress={ () => navigate('Comment', { id: id }) }>
          </TouchableOpacity>
          <TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({})