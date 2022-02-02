import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ReviewDetails(){
    return(
        <View style={styles.container}>
            <Text> Review Screen </Text>
        </View>
    );
}

// stylesheet
const styles = StyleSheet.create({
    container:{
        padding:24
    }
});