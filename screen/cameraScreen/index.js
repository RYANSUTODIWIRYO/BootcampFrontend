import React, { Component, PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

class MyCamera extends PureComponent {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log("ini uri: ", data.uri);
      this.props.setPictureTaken(data.uri);
    }
  };
  
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class CameraScreen extends Component {
  state = {
    // picture: "file:///data/user/0/com.login/cache/Camera/6a8d2f50-c479-4625-a546-5df1129c67eb.jpg"
    picture: null
  }

  setPictureTaken = (picture) => {
    this.setState({
      picture
    })
  }

  onPressOkHandler = () => {
    // this.props.navigation.navigate("InputScreen",{
    //   picture: this.state.picture
    // })
    this.props.route.params.setPicture(this.state.picture)
    this.props.navigation.goBack()
  }

  render() {
    console.log("picture:", this.state.picture)
    return (
      <>
        {
          this.state.picture === null
          ? 
          <MyCamera setPictureTaken={this.setPictureTaken}/>
          :
          <View style={{flex:1, alignItems:"center"}}>
            <View>
              <Image source={{ uri: this.state.picture }} style={{ width: 415, height: 555}}/>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-around", width:"100%"}}>
              <TouchableOpacity style={styles.capture} onPress={this.onPressOkHandler}>
                <Text>OK</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.capture} onPress={() => this.setState({picture: null})}>
                <Text>Re-Take</Text>
              </TouchableOpacity>              
            </View>
          </View>
        }
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    margin: 20,
    width: 100
  },
});

export default CameraScreen