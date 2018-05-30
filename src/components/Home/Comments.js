import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Comment } from '../reusables'

export default class Comments extends Component {
  state = {
    comments: [],
    loading: true
  }
  componentDidMount(){
    const { id } = this.props.navigation.state.params;
    axios.get(`http://localhost:3500/posts/${id}/comments`)
      .then(res => {
        const comments = res.data.comments;
        this.setState({ comments, loading: false });
      });
  }
  render(){
    const { comments, loading } = this.state;
    return (
      loading
        ?
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        :
          <View style={styles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={feed}
              renderItem={({ comment }) => <Comment author={comment.author.name} username={comment.author.username} text={comment.text} /> }
              style={styles.flatList}
              keyExtractor={ comment => comment._id }
              scrollEventThrottle={1}
            />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});