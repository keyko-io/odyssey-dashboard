import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import jsQR from "jsqr";

interface Props {
  navigation: any
}

export class CameraView extends Component<Props> {
  videoRef: any
  canvasRef: any
  canvasContext: any
  interval: any

  constructor(props:any) {
    super(props);
    this.videoRef = React.createRef();
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.canvasContext = this.canvasRef.current.getContext('2d');  
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          this.videoRef.current.srcObject = stream;
          this.videoRef.current.play();
      });
    }
    this.interval = setInterval(()=>{
      this.canvasContext.clearRect(0,0,640,480);
      this.canvasContext.drawImage(this.videoRef.current,0,0,640,480);
      const code = jsQR(this.canvasContext.getImageData(0, 0, 640, 480).data,640,480)
      if(code !== null){
        clearInterval(this.interval)
        // TODO: resolve data from url
        const resolvedData = {
          did: 'did:nvm:11111111111',
          description: 'Dave',
          state: 'Delivered',
          destination: 'Malaga'
        }
        this.props.navigation.navigate('detailsItem', resolvedData)
      }
    },1000)
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
          <video ref={this.videoRef} width="640" height="480" autoPlay></video>
          <canvas ref={this.canvasRef} width="640" height="480" style={{width:640,height:480,opacity:0}}></canvas>
      </View>
    );
  }
}