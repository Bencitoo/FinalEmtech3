import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../src/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login({ navigation }) {
  const [studentNumber, setStudentNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoginSuccess(true);
      setTimeout(() => {
        navigation.navigate('MainTab');
      }, 2000);
    } catch (error) { 
      alert(error.message);
    }
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./pictures/LOSTNFOUND_LOGO_1_YELLOW.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.imageText}>Let's help you find your things!</Text>
        </View>
      </View>
      <View style={styles.inputborder}>
        <TextInput
          placeholder="*Student Number"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
          value={studentNumber}
          onChangeText={(text) => setStudentNumber(text)}
        />
      </View>
      <View style={styles.inputborder}>
        <TextInput
          placeholder="*TIP Email"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={[styles.inputborder, { marginBottom: 50 }]}>
        <TextInput
          placeholder="*Password"
          style={styles.inputtext}
          placeholderTextColor="#E9D735"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, { width: 200, borderRadius: 10 }]}
        onPress={handleLogin}
      >
        <Text style={styles.buttontext}>LOGIN</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.acctext}>Don’t have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signtext}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#394B58',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    width: 500,
  },
  image: {
    marginTop:20,
    width: 350,
    height: 170,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 15,
    color: 'white',
    paddingTop:10,
    paddingBottom: 30,
    fontWeight: 'bold',
  },
  inputtext: {
    fontSize: 13,
    fontWeight: '100',
    color: '#E9D735',
    marginTop: 5,
    paddingBottom: 13,
    paddingTop: 15,
  },
  inputborder: {
    borderBottomColor: 'white',
    borderBottomWidth: .7,
    width: 245,
    marginBottom: 19,
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#E9D735',
    paddingVertical: 7,
    alignItems: 'center',
  },
  buttontext: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  acctext: {
    marginTop: 15,
    fontSize: 15,
    color: 'white',
  },
  signtext: {
    marginTop: 20,
    fontSize: 15,
    color: '#E9D735',
    fontWeight: 'bold',
  },
});

