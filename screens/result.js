import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-web'


const Result = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.topText}>Meet your 2022 Valentine...</Text>
            <Text style={styles.topTextb}>Mason Man</Text>
        </View>
        <View style={styles.bannerContainer}>
            <Image source = {require('./resultMatch.jpg')}
                style={styles.banner}
                resizeMode="contain"

            />
        </View>
        <View>
            <TouchableOpacity style={styles.tryButton} onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.tryagain}>Try Again</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    container: {
        padding:12,
        height: '100%',
        backgroundColor: '#FFF1F6',
        paddingTop: 90,
        paddingVertical: 40,
        alignItems: 'center'
    },
    banner:{
        height: 600,
        width: 300,
    },
    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    topText: {
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    topTextb: {
        fontSize: 35,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#EF476F',
        paddingTop: 12
    },
    tryButton:{
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 180,
        borderRadius: 18,
        borderColor: '#EF476F',
        borderWidth: 1.5,
        backgroundColor: '#EF476F',
        marginBottom: 30,
        marginHorizontal: 20,
    },
    tryagain: {
        fontSize: 18,
        color: 'white'
    }
});