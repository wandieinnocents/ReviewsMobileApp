import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function About({navigation}){
    const goBackHome = () => {
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
            <Text> About Screen </Text>
            <Button 
                title='BACK TO HOME SCREEN'
                onPress={goBackHome}
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