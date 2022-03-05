import { Text, View, TextInput, TouchableOpacity, StyleSheet ,Alert} from 'react-native'
import React, { useState } from 'react'
// import CheckBox from 'react-native-check-box'
import { Checkbox } from 'react-native-paper';





const LogIn = ({navigation}) => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  function onSubmit(){
    if(userName==="asad" && password==="1234"){
      Alert.alert(`${userName} you are successfully LogIn`)
      navigation.navigate('Home',{myName:`${userName}`})
    }
    else{
      Alert.alert('Invalid user name or password')
    }
  }
  const [isChecked, setIsChecked] = useState(false)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.parentHeader}>
        <Text style={styles.header}>Login Form</Text>
      </View>
      <View style={styles.commonStyle}>
        <Text style={styles.label}>Enter Your Name</Text>
        <TextInput
          value={userName}
          onChangeText={(e) => { setUserName(e) }}

          autoCorrect={false}
          autoCapitalize='none'
          style={styles.input}></TextInput>
      </View>
      <View style={styles.commonStyle}>
        <Text style={styles.label}>Enter Your Password</Text>
        <TextInput
          value={password}
          onChangeText={(e) => { setPassword(e) }}


          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={true}
          style={styles.input}></TextInput>
      </View>
      <View style={[styles.commonStyle, styles.checkbox]}>
        <Checkbox
          value={isChecked}
          status={isChecked ? 'checked' : 'unchecked'}
          uncheckedColor={'crimson'}
          color={'green'}
          onPress={() => {
            setIsChecked(!isChecked);
          }}
        /><Text>I have agreed the terms & conditions</Text>

      </View>
      <View style={styles.buttonParent}>
        <TouchableOpacity 
        onPress={()=>onSubmit()}
        disabled={!isChecked} style={[styles.button, { backgroundColor: isChecked ? 'pink' : '#969696' }]}>
          <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}


const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: '5%',
    marginTop: 50,
    width: '90%',
    borderWidth: 2,
    borderRadius: 5
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center'

  },
  header: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 20,
    marginBottom: 100,
    fontWeight: 'bold',
    letterSpacing: 5
  },
  commonStyle: {
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  label: {
    fontSize: 20,
    marginBottom: 3
  },
  input: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'

  },
  buttonParent: {
    marginBottom: 50,
    paddingHorizontal: 20,


  },
  button: {
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,


  }

})

export default LogIn