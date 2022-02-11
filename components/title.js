import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Title = () => {
  return (
    <View>
      <Text style={styles.title}>MyValentine</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#EF476F',
    }
});