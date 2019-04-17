import React from 'react';
import { Text, View, TouchableOpacity, Button, TouchableWithoutFeedback } from 'react-native';
import { Camera, Permissions, MediaLibrary } from 'expo';
import Toolbar from './toolbar.component'
import styles from './styles';
import Gallery from './gallery.component';

export default class CameraExample extends React.Component {
  // Why can set state without constructor?
  // This is equivalent to constructor
  // BUT if you leave out super(props), you lose access to props
  // Here you get access to props

  state = {
    // Check permissions
    hasCameraPermission: null,
    // Front or back
    type: Camera.Constants.Type.back,
    // Store image/videos in app cache - this will be erased if you reload app - save to medialibrary OR firebase
    captures: [],
    // setting flash to be turned off by default
    flashMode: Camera.Constants.FlashMode.off,
    // this is to set style on button when it's capturing photo/video
    capturing: null,
  }

  async componentDidMount() {
    // Testing if theory is true
    console.log(this.props.test)
    
    console.log('camera did mount')
    
    // You need both permissions to do camera and video stuff
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const hasCameraPermission = (camera.status == 'granted' && audio.status == 'granted')
    this.setState({  hasCameraPermission })
  }

  // This is called by the child
  setFlashMode = (flashMode) => this.setState({ flashMode });

  setCameraType = (cameraType) => {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  };

  handleCaptureIn = () => this.setState({ capturing: true });

  handleCaptureOut = () => {
      if (this.state.capturing)
          this.camera.stopRecording();
  };

  handleShortCapture = async () => {
      const photoData = await this.camera.takePictureAsync();
      const asset = await MediaLibrary.createAssetAsync(photoData.uri);

      this.setState({ capturing: false, captures: [photoData, ...this.state.captures] })
  };

  handleLongCapture = async () => {
      const videoData = await this.camera.recordAsync();
      console.log('video recording in progressssss wtf?')
      console.log(videoData)
      
      // Saves to Album - Working!
      const asset = await MediaLibrary.createAssetAsync(videoData.uri);

      this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
  };

  render() {
    const { hasCameraPermission, flashMode, cameraType, capturing, captures } = this.state;

    
    if (hasCameraPermission === null) {
      return <View />;
    } 
    else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } 
    else {
      
      return (
          <View style={{ flex: 1 }}>
            <Camera  
                type={cameraType}
                flashMode={flashMode}
                style={styles.preview}
                ref={camera => this.camera = camera}
                style={{ flex: 1 }} 
                type={this.state.type}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}Flup{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          

          {captures.length > 0 && <Gallery captures={captures}/>}


          <Toolbar 
            capturing={capturing}
            flashMode={flashMode}
            cameraType={cameraType}
            setFlashMode={this.setFlashMode}
            setCameraType={this.setCameraType}
            onCaptureIn={this.handleCaptureIn}
            onCaptureOut={this.handleCaptureOut}
            onLongCapture={this.handleLongCapture}
            onShortCapture={this.handleShortCapture}
          />
          </View>
        
      );
    }
  }
}
