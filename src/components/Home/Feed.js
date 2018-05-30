import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Post } from '../reusables';

export default class Feed extends Component {
  state = {
    feed: [],
    username: '',
    loading: true
  }
  componentWillMount(){
    // Get user id from AsyncStorage
    const { navigate } = this.props.navigation;
    AsyncStorage.getItem('user', (value) => {
      if(!value){
        // alert('User not logged in!');
        () => navigate('Auth');
      }
      const user = JSON.parse(value);
      this.setState({ username: user.username });
    });
  }
  componentDidMount(){
    const { username } = this.state;
    axios.get(`http://localhost:3500/user/${username}/feed`)
      .then(res => {
        const feed = res.data.feed;
        this.setState({ feed, loading: false });
      })
  }
  render(){
    const { feed, loading } = this.state;
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
              renderItem={({ post }) => <Post id={post._id} author={post.author.name} username={post.author.username} text={post.text} likesCount={post.likes.length} commentsCount={post.comments.length} /> }
              style={styles.flatList}
              keyExtractor={ post => post._id }
              scrollEventThrottle={1}
            />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});