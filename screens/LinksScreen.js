import React, {Component} from 'react';
import {Image, StyleSheet, View, Button} from "react-native";

export default class LinksScreen extends Component {

    render() {
        const images = [{
            // Simplest usage.
            url: 'https://media.discordapp.net/attachments/552258099029999626/606164315241840834/bleptv.png?width=658&height=1170',
        }]

        return (
            <View>
                <Image
                    style={this.styles.image}
                    source={{uri: 'https://media.discordapp.net/attachments/552258099029999626/606164315241840834/bleptv.png?width=658&height=1170'}}
                />
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('ImageScreen')
                    }}
                    title='press'
                />
            </View>
        );
    }

    styles = StyleSheet.create({
        image: {
            width: '100%',
            height: '80%',
            resizeMode: 'contain',
        }
    })
}
