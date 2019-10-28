import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from "react-native";

export class LoreItem extends Component {
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
                <Text style={this.styles.title}>{this.props.item.title}</Text>
                <Text style={this.styles.subTitle}>{this.props.item.subTitle}</Text>
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
            marginTop: 10,
        },
        subTitle: {
            color: "#8b8b8b",
            marginTop: 5,
            fontSize: 10,
            fontWeight: 'normal'
        }
    })
}
