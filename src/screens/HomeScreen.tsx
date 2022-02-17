import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    return (
        <View>
            <Icon 
                name="rocket" 
                size={100} 
                color="#900" />

            <Icon 
                name="star-outline" 
                size={100} 
                color="black" />
        </View>
    )
}

export default HomeScreen