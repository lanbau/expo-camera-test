import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CameraExample from './CameraExample'

export default class Setting extends React.Component {
  render() {
    return (
      <CameraExample test={true}/>
    )
  }
}