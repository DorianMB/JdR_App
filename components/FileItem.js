import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from "react-native";

export class FileItem extends Component {
    render() {
        if (!this.props.item) {
            return <Text>ERREUR</Text>
        }
        return (
            <View style={this.styles.container}>
                <Text style={this.styles.title}>{this.props.item.firstname + ' ' + this.props.item.lastname}</Text>
                <View style={this.styles.subTitle}>
                    <View style={this.styles.containerBottom}><Text>{this.props.item.info.classe}</Text></View>
                    <View style={this.styles.containerBottom}><Text>{'niveau '+this.props.item.info.niveau}</Text></View>
                    <View style={this.styles.containerBottom}><Text>{this.props.item.info.joueur}</Text></View>
                </View>
            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            width: ((Dimensions.get('window').width) - 40),
            marginTop: 20,
            backgroundColor: "#ffffff",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        title: {
            fontSize: 20,
            marginTop: 20,
            fontWeight: 'bold',
        },
        subTitle: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            color: "#8b8b8b",
            marginTop: 40,
            marginBottom: 20,
            fontSize: 10,
            width: '100%',
            fontWeight: 'normal',
        },
        containerBottom: {
            width: 100,
            alignItems: 'center'
        }
    })
}
