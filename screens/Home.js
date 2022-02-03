import React,{ useState } from 'react';
import { StyleSheet, Text, Button, View, FlatList, TouchableOpacity } from 'react-native';

import { globalStyles } from '../styles/global';


export default function Home({ navigation}){

    const [reviews, setReviews ] = useState([
        { 
            title: 'Good', 
            rating: '5', 
            body: 'This is a good one sofar' , 
            key: '1'
        },
        { 
            title: 'Fair', 
            rating: '4', 
            body: 'This is a fair one sofar' , 
            key: '2'
        },
        { 
            title: 'Bad', 
            rating: 'T3', 
            body: 'This is a bad one sofar' , 
            key: '3'
        },
    ]);

    return(
        <View style={globalStyles.container}>
        <FlatList 
        data={reviews}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',item )}>
                <Text >{ item.title }</Text>
            </TouchableOpacity>
        )}


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