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
        {/* curve */}
        <View style={styles.curve}>

            

        </View>

            <Button 
                title='REVIEW'
                onPress={pressHandler}
            />
            <Text style={globalStyles.titleText}> Hoames Screen </Text>

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
    },

    curve:{
        padding:100,
        
        backgroundColor:'blue',
        height:80,
        borderBottomLeftRadius:200,
        borderBottomRightRadius:200,
       
    },

});