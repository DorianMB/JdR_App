import React, {Component} from 'react';
import {Text, ScrollView, ImageBackground, View, StyleSheet, Dimensions, Button} from "react-native";
import ImageView from 'react-native-image-view';

export default class FileInfo extends Component {

    componentDidMount() {
        this.setState(this.props.navigation.getParam('File', {}));
    }

    static navigationOptions = {
        title: "Fiche du personnage",
    };

    render() {
        if (this.state) {

            return (
                <ScrollView>
                    <ImageBackground
                        source={{uri: this.state['file'].photo}}
                        style={this.styles.bgImage}
                    >
                        <View style={this.styles.headerContainer}>
                            <Text style={this.styles.title}>{this.state['file'].fullname}</Text>
                        </View>
                    </ImageBackground>
                    <View style={[this.styles.container, this.styles.oddContainer]}>
                        {Object.keys(this.state['file'].info).map((key, index) =>
                            (
                                <View key={key}>
                                    <View style={[this.styles.content, this.styles.witdh3]}>
                                        <Text style={this.styles.contentInfo}>{this.state['file'].info[key]}</Text>
                                        <Text>{key}</Text>
                                    </View>
                                </View>
                            )
                        )
                        }
                    </View>
                    <View style={[this.styles.container, this.styles.evenContainer]}>
                        {Object.keys(this.state['file'].characteristics).map((key, index) =>
                            (
                                <View key={key}>
                                    <View style={[this.styles.content, this.styles.witdh3]}>
                                        <Text
                                            style={this.styles.contentInfo}>{this.state['file'].characteristics[key]}</Text>
                                        <Text>{key}</Text>
                                    </View>
                                </View>
                            )
                        )
                        }
                    </View>
                    <View style={[this.styles.container, this.styles.oddContainer]}>
                        <View>
                            <View style={[this.styles.content, this.styles.witdh2]}>
                                <Text style={this.styles.contentInfo}>{this.state['file'].inspiration}</Text>
                                <Text>Inspiration</Text>
                            </View>
                        </View>
                        <View>
                            <View style={[this.styles.content, this.styles.witdh2]}>
                                <Text style={this.styles.contentInfo}>{this.state['file'].bonusMaster}</Text>
                                <Text>Bonus de maitrise</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[this.styles.container, this.styles.evenContainer]}>
                        {Object.keys(this.state['file'].saves).map((key, index) =>
                            (
                                <View key={key}>
                                    <View style={[this.styles.content, this.styles.witdh3]}>
                                        <Text
                                            style={this.styles.contentInfo}>
                                            {this.state['file'].saves[key].value +
                                            (this.state['file'].saves[key].isMastered ? '*' : '')}
                                        </Text>
                                        <Text>{key}</Text>
                                    </View>
                                </View>
                            )
                        )
                        }
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
            flexDirection: 'row',
            alignContent: 'flex-start',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            paddingBottom: 20,
            paddingTop: 20,
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
            resizeMode: 'cover',
        },
        oddContainer: {
            backgroundColor: '#eeeeee',
            borderBottomWidth: 2,
            borderBottomColor: '#d4d4d4',
        },
        evenContainer: {
            backgroundColor: '#ffffff',
            borderBottomWidth: 2,
            borderBottomColor: '#d4d4d4',
        },
        content: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            margin: 0
        },
        contentInfo: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        witdh2: {
            width: ((Dimensions.get('window').width) / 2),
        },
        witdh3: {
            width: ((Dimensions.get('window').width) / 3),
        }
    })
}
