import React, {Component} from 'react';
import {Text, ScrollView, ImageBackground, View, StyleSheet, Dimensions} from "react-native";

export default class PnjInfo extends Component {

    componentDidMount() {
        this.setState(this.props.navigation.getParam('Pnj', {}));
    }

    static navigationOptions = {
        title: "Fiche pnj",
    };

    render() {
        if (this.state) {
            return (
                <ScrollView>
                    <ImageBackground source={{uri: this.state['pnj'].photo}} style={this.styles.bgImage}>
                        <View style={this.styles.headerContainer}>
                            <Text style={this.styles.title}>{this.state['pnj'].fullname}</Text>
                        </View>
                    </ImageBackground>
                    <View style={this.styles.container}>
                        <Text>{this.state['pnj'].description}</Text>
                    </View>
                </ScrollView>
            );
        }
        return <Text>ERREUR</Text>
    }

    styles = StyleSheet.create({
        headerContainer: {
            flex: 1,
            height: 200,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        container: {
            flex: 1,
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            flex: 1,
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            textShadowColor: '#000',
            textShadowOffset: {width: 0.5, height: 0.5},
            textShadowRadius: 5
        },
        bgImage: {
            width: '100%',
        }
    })
}
