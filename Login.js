import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Register from './Register';
import Forgot from './ForgotPass';

import * as Font from 'expo-font';

function Login() {
    const navigation = useNavigation();
    const handleRegisterPress = () => {
        navigation.navigate('Register');
    };
    const handleForgotPress = () => {
      navigation.navigate('Forgot');
  };
    useEffect(() => {

      async function loadFonts() {
        await Font.loadAsync({
          'impact': require('./assets/fonts/impact.ttf'),
        });
      }
  
      loadFonts();
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (name, value) => {
        setFormData({
        ...formData,
        [name]: value,
        });
    };

  const handleSubmit = () => {
    const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = 'El correo electrónico es obligatorio';
    }
    if (!formData.password) {
      validationErrors.password = 'La contraseña es obligatoria';
    }
    if (Object.keys(validationErrors).length === 0) {
      console.log('Datos de inicio de sesión válidos:', formData);
    } else {
      setErrors(validationErrors);
    }
    console.log(errors)
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App.Js</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleChange('password', text)}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

    
      <Button
        title="Olvidé mi contraseña"
        onPress={(handleForgotPress)}
        type="clear" 
        titleStyle={styles.forgotPasswordText}
      />

      
      <Button
        title="Iniciar sesión"
        onPress={handleSubmit}
        containerStyle={styles.loginButtonContainer}
        buttonStyle={styles.loginButton}
      />
       
      <Button
        title="Registrarse"
        onPress={(handleRegisterPress)}
        containerStyle={styles.registerButtonContainer}
        buttonStyle={styles.registerButton}
      />
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgb(26, 28, 29)',

  },
  title: {
    fontSize: 44,
    marginBottom: 16,
    color:'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  registerButtonContainer: {
    width: '100%',
    marginBottom: 16,
    
  },
  registerButton: {
    backgroundColor: 'rgb(99, 24, 120)',
    marginTop: 46,
    borderRadius: 15,
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 15,
  },
  loginButtonContainer: {
    width: '100%',
  },
  loginButton: {
    backgroundColor: 'rgb(99, 24, 120)',
    borderRadius: 15,
  },
});

export default Login;
