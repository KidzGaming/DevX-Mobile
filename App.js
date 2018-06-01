import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, ActivityIndicator } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Feed, Comments } from './src/components/Home';
import { Login, Signup, Verify } from './src/components/Auth';

// import { Post } from './src/components/reusables';

export default class App extends React.Component {
  state = {
    authStatusReported: false,
    isUserAuthenticated: false,
    user: {}
  }
  componentDidMount(){
    AsyncStorage.getItem('user', (value) => {
      this.setState({
        authStatusReported: true,
      });
      if(!value){
        alert('User not logged in!')
      }
      const user = JSON.parse(value);
      this.setState({ isUserAuthenticated: true, user: user });
    });
  }
  render() {
    const { authStatusReported, isUserAuthenticated } = this.state;
    return (
      (authStatusReported)
        ?
          isUserAuthenticated
            ?
              <Application />
            :
              <Login />
        :
          <View style={styles.loadingView}>
            <ActivityIndicator />
          </View>
    );
  }
}

// const Poster = StackNavigator({
//   Post: { screen: Post },
//   Comments: { screen: Comments }
// });

const Auth = StackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Verify: { screen: Verify }
});

const Home = TabNavigator({
  Feed: { screen: Feed },
  Comments: { screen: Comments }
});

const Application = StackNavigator({
  Auth: { screen: Auth },
  Home: { screen: Home }
});

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});