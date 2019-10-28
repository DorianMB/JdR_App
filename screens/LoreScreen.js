import React, {Component} from 'react';
import {Text, ScrollView, TouchableOpacity, View, StyleSheet, Dimensions} from "react-native";
import {getLore} from "../assets/data/Lore";
import {LoreItem} from "../components/LoreItem";

export default class LoreScreen extends Component {

    static navigationOptions = {
        title: 'Wiki JdR',
    };

    navigate(route){
        if (route){
            this.props.navigation.navigate(route);
        }
    }

    render() {
        this.lore = getLore();

        if (!this.lore) {
            return <Text>ERREUR</Text>
        }
        let items = Object.keys(this.lore).map((key, index) =>
            (
                <TouchableOpacity
                    key={key}
                    onPress={() => {
                        this.navigate(this.lore[key].route)
                    }}
                >
                    <LoreItem item={this.lore[key]}/>
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
    }
})
