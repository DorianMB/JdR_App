import React, {Component} from 'react';
import {Image, Dimensions} from "react-native";
import ImageZoom from 'react-native-image-pan-zoom';

export default class ImageScreen extends Component {
    render() {
        return (
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={Dimensions.get('window').width}
                       imageHeight={Dimensions.get('window').height}>
                <Image resizeMode="contain" style={{width: '100%', height: '80%'}}
                       source={{uri: 'https://media.discordapp.net/attachments/552258099029999626/606164315241840834/bleptv.png?width=658&height=1170'}}/>
            </ImageZoom>
        )
    }
}
