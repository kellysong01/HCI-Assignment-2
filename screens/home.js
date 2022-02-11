import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Title from '../components/title'
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title />

      <View style={styles.bannerContainer}>
        <Image source = {require('./lover.jpg')}
            style={styles.banner}
            resizeMode="contain"

        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('Quiz')}> 
        <Text style={styles.buttonText}>Find Love</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height: 600,
        width: 500,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttonContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 250,
        borderRadius: 20,
        backgroundColor: '#EF476F',
        marginBottom: 90,
    },
    container: {
        paddingTop: 90,
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#F1FFFE'
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    }
});