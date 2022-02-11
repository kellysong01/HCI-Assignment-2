import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const Quiz = ({ navigation }) => {

  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.topText}>What do you look for in an ideal partner?</Text>
        </View>
        <View style={styles.options}>
             <TouchableOpacity style={[styles.optionButton, selected === 'appearance' ? {backgroundColor: '#26547C'} : null ]} onPress={() => { setSelected('appearance') }}>
                <Text style={styles.optionText}>Good Physical Appearance</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.optionButton, selected === 'personality' ? {backgroundColor: '#26547C'} : null ]} onPress={() => { setSelected('personality') }}>
                <Text style={styles.optionText}>Attractive Personality</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.optionButton, selected === 'financial' ? {backgroundColor: '#26547C'} : null ]} onPress={() => { setSelected('financial') }}>
                <Text style={styles.optionText}>Financial State or Wealth</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.optionButton, selected === 'future' ? {backgroundColor: '#26547C'} : null ]} onPress={() => { setSelected('future') }}>
                <Text style={styles.optionText}>Future Aspirations and Plan</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNext} onPress={()=>navigation.navigate('QuizNext')}>
                <Text style={styles.buttonTextNext}>Next</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        padding:12,
        height: '100%',
        backgroundColor: '#FFF1F6',
        paddingTop: 90,
        paddingVertical: 40,
    },
    top: {
        marginVertical: 16,
        marginHorizontal: 20,
    },
    topText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    options: {
        marginVertical: 16,
        marginHorizontal: 20,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 115,
        borderRadius: 18,
        borderColor: '#EF476F',
        borderWidth: 1.5,
        backgroundColor: 'white',
        marginBottom: 30,
        marginHorizontal: 20,
    },
    buttonNext: {
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
    buttonText: {
        fontSize: 18,
    },
    buttonTextNext: {
        fontSize: 20,
        color: 'white',
    },
    optionText: {
        fontSize: 18,
        marginLeft: 25,
        color: 'white',
        fontWeight: '600'
    },
    optionButton: {
        justifyContent: 'center',
        height: 45,
        width: 310,
        borderRadius: 30,
        borderColor: '#EF476F',
        borderWidth: 1.5,
        backgroundColor: '#EF475B',
        marginBottom: 25,
    }
});