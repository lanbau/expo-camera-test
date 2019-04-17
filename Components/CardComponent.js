import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
const uri = 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Trump_Circle.png'
const uri1 = 'https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2019/03/batman-70.jpg?itok=1JXHURwF'

export default class CardComponent extends React.Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: uri}} />
            <Body>
              <Text>Donald Tump</Text>
              <Text note>Jan 15 2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: uri1}} style={{height:200, width:null, flex:1}}/>
        </CardItem>
        <CardItem>
          <Button transparent>
            <Icon name="ios-heart" style={{ color: 'black' }}/>
          </Button>
          <Button transparent>
            <Icon name="ios-home" style={{ color: 'black' }}/>
          </Button>
          <Button transparent>
            <Icon name="ios-send" style={{ color: 'black' }}/>
          </Button>
        </CardItem>
        <CardItem>
          <Text>100 Likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}