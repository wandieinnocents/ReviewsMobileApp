import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Reviews({navigation}){


    const goHome = () => {
        navigation.goBack();
    }

    const goToReviewDetails = () => {
        navigation.navigate('ReviewDetails');
    }
    return(
        <View style={styles.container}>
            <Text> Reviews Screen </Text>
            <Button 
                title='GO BACK HOME '
                onPress={goHome}

            />
            <Button 
                title='REVIEW DETAILS '
                onPress={goToReviewDetails}

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