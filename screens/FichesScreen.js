import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Dimensions} from "react-native";
import {getFiles} from "../assets/data/Files";
import {FileItem} from "../components/FileItem";

export default class FichesScreen extends Component {
    static navigationOptions = {
        title: 'Fiches personnages',
    };


    render() {
        this.files = getFiles();

        if (!this.files) {
            return <Text>ERREUR</Text>
        }
        let items = Object.keys(this.files).map((key, index) =>
            (
                <TouchableOpacity
                    key={key}
                    onPress={() => {
                        this.props.navigation.navigate('FileInfo', {File: {file: this.files[key]}})
                    }}
                >
                    <FileItem item={this.files[key]}/>
                </TouchableOpacity>
            )
        );
        return (
            <ScrollView >
                <View style={{minHeight: Dimensions.get('window').height}}>
                    {items}
                </View>
            </ScrollView>
        );
    }
}
