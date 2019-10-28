import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LoreScreen from '../screens/LoreScreen';
import LinksScreen from '../screens/LinksScreen';
import FichesScreen from '../screens/FichesScreen';
import PnjScreen from "../screens/PnjScreen";
import PnjInfo from "../screens/PnjInfo";
import FileInfo from "../screens/FileInfo";
import ImageScreen from "../screens/ImageScreen";

const config = Platform.select({
    web: {headerMode: 'screen'},
    default: {},
});

const LoreStack = createStackNavigator(
    {
        Home: LoreScreen,
        PnjList: PnjScreen,
        PnjInfo: PnjInfo,
    },
    config
);

LoreStack.navigationOptions = {
    tabBarLabel: 'Wiki JdR',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-book`
                    : 'md-book'
            }
        />
    ),
};

LoreStack.path = '';

const LinksStack = createStackNavigator(
    {
        Links: LinksScreen,
        ImageScreen: ImageScreen,
    },
    config
);

LinksStack.navigationOptions = {
    tabBarLabel: 'News',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-tv' : 'md-tv'}/>
    ),
};

LinksStack.path = '';

const FichesStack = createStackNavigator(
    {
        FichesScreen: FichesScreen,
        FileInfo: FileInfo,
    },
    config
);

FichesStack.navigationOptions = {
    tabBarLabel: 'Fiches personnages',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'}/>
    ),
};

FichesStack.path = '';

const tabNavigator = createBottomTabNavigator({
    LoreStack,
    FichesStack,
    LinksStack,
});

tabNavigator.path = '';

export default tabNavigator;
