import { Text, View,StyleSheet } from 'react-native'
import React from 'react'

const Home=({route,navigation})=>{
    const {myName}=route.params;
    return (
      <View>
        <Text>Welcome <Text style={styles.name}>{myName}</Text></Text>
      </View>
    )
  
}

const styles=StyleSheet.create({
    name:{
        textTransform:'capitalize'
    }
})

export default Home