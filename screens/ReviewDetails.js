import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ReviewDetails({navigation}){

    // navigate to home
    const pressHandler = () => {
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
            <Text> Review Screen </Text>
            <Button 
                title='BACK TO HOME SCREEN'
                onPress={pressHandler}
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