import React, {Component} from 'react';
import {Text, ScrollView, TouchableOpacity, View, StyleSheet, Button, Dimensions} from "react-native";
import {getLore} from "../assets/data/Lore";
import {PnjItem} from "../components/PnjItem";

export default class PnjScreen extends Component {


    static navigationOptions = {
        title: "Liste des pnj",
    };

    render() {
        this.pnj = getLore().pnj;

        if (!this.pnj) {
            return <Text>ERREUR</Text>
        }
        let items = Object.keys(this.pnj.pnjs).map((key, index) =>
            (
                <TouchableOpacity
                    key={key}
                    onPress={() => {
                        this.props.navigation.navigate('PnjInfo', {Pnj: {pnj: this.pnj.pnjs[key]}})
                    }}
                >
                    <PnjItem item={this.pnj.pnjs[key]}/>
                </TouchableOpacity>
            )
        );
        return (
            <ScrollView>
                <View style={styles.container}>
                    {items}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'flex-start',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
})
