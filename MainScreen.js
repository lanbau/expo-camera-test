import React from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import { Icon, Container, Content, Thumbnail } from 'native-base'
import Video from 'react-native-video';

import CardComponent from './Components/CardComponent'
import CameraExample from './CameraExample'
const uri = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Trump_Circle.png'

class HomeScreen extends React.Component {
  static navigationOptions = {
    //https://stackoverflow.com/questions/47950833/react-why-is-double-brace-syntax-style-required-for-inline-styles
    tabBarIcon: ({ tintColor }) => ( <Icon name="home" style={{tintColor}} /> ),
    
  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ height:100 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 7, alignItems: 'center' }}>
              <Text>
                Stories
              </Text>
              <Text>
                View All
              </Text>
            </View>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
                <Thumbnail source={{uri: uri}} />
              </ScrollView>
            </View>
          </View>
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Content>
        <Button title="Go To Setting" onPress={() => {
          this.props.navigation.navigate('Setting')
          console.log('going to settings')
        }}>Setting</Button>
      </Container>
    );
  }
}
class SearchScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => ( <Icon name="search" style={{tintColor}} /> )
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
})
// https://reactnavigation.org/docs/en/material-top-tab-navigator.html#docsNav
// Why? createBottomTabNavigator does NOT have animation. for some stupid reason, it is deprecated.
const MaterialTabNavigator = createMaterialTopTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,

},
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    showIcon: true,
    showLabel: false
  }
})
//https://stackoverflow.com/questions/37386244/what-does-flex-1-mean/42630660
//flex-grow : 1; // this means that the div will grow in same proportion as the window-size
//flex-shrink : 1; // this means that the div will shrink in same proportion as the window-size 
//flex-basis : 0; // this means that the div does not have a starting value as such and will take up screen as per the screen size available for.e.g:- if 3 divs are in the wrapper then each div will take 33%.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default createAppContainer(MaterialTabNavigator);