import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

import { globalStyles } from '../styles/global';


export default function Home({ navigation}){

    // navigate to another page
    const pressHandler = () => {
        navigation.navigate('Reviews');
        // navigation.push('Review');
    }
    // about
    const navigateAbout = () => {
        navigation.navigate('About');
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}> Home Screen </Text>
            <Button 
                title='REVIEW'
                onPress={pressHandler}
            />
            <Text style={globalStyles.titleText}> Home Screen </Text>

               <Button 
                title='ABOUT'
                onPress={navigateAbout}
                
            />

        </View>
    );
}

// stylesheet
const styles = StyleSheet.create({
    container:{
        padding:24
    }
});