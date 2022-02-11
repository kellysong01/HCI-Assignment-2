import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const QuizNext = ({ navigation }) => {

  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.topText}>What is your type?</Text>
        </View>
        <View style={styles.options}>
             <TouchableOpacity style={[styles.optionButton, selected === 'cute' ? {backgroundColor: '#26547C'} : null ]} onPress={() => { setSelected('cute') }}>
                <Text style={styles.optionText}>Cute</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.optionButton, selected === 'sexy' ? {backgroundColor: '#26547C'} : null ]} onPress={() => { setSelected('sexy') }}>
                <Text style={styles.optionText}>Sexy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.optionButton, selected === 'athletic' ? {backgroundColor: '#26547C'} : null ]} onPress={() => { setSelected('athletic') }}>
                <Text style={styles.optionText}>Athletic</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.optionButton, selected === 'wise' ? {backgroundColor: '#26547C'} : null ]} onPress={() => { setSelected('wise') }}>
                <Text style={styles.optionText}>Wise-looking</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNext} onPress={()=>navigation.navigate('Result')}>
                <Text style={styles.buttonTextNext}>Find my Match</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default QuizNext

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