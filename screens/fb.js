import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class fb extends React(){
    render(){
        return(
            <View style = {styles.screenView}>
                <Text>Facebook</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})