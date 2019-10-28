import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from "react-native";

export class PnjItem extends Component {
    render() {
        if (!this.props.item) {
            return <Text>ERREUR</Text>
        }
        return (
            <View style={this.styles.container}>
                <Image
                    style={this.styles.image}
                    source={{uri: this.props.item.photo}}
                />
                <Text style={this.styles.title}>{this.props.item.firstname+' '+this.props.item.lastname}</Text>
            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: ((Dimensions.get('window').width) / 2),
            height: 250,
            padding: 0,
            margin: 0
        },
        image: {
            width: 100,
            height: 100
        },
        title: {
            fontSize: 15,
            marginTop: 20,
        }
    })
}
