import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import Register from './Register';

function Login() {
    const navigation = useNavigation();
    const handleRegisterPress = () => {
        // Navega a la pantalla de registro cuando se presiona el botón "Registrarse"
        navigation.navigate('Register');
    };

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
    // Realiza las validaciones aquí
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
      <Text style={styles.title}>Iniciar sesión</Text>
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

      {/* Botón para olvidar la contraseña */}
      <Button
        title="Olvidé mi contraseña"
        onPress={() => {
          // Agrega la lógica para la recuperación de contraseña aquí
          console.log('Recuperar contraseña');
        }}
        type="clear" // Hace que el fondo del botón sea transparente
        titleStyle={styles.forgotPasswordText}
      />

      {/* Botón de inicio de sesión */}
      <Button
        title="Iniciar sesión"
        onPress={handleSubmit}
        containerStyle={styles.loginButtonContainer}
        buttonStyle={styles.loginButton}
      />
       {/* Botón para el registro */}
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

  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  button: {
    borderRadius: 50, // Establece el borde circular
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
    backgroundColor: 'blue',
    marginTop: 46,
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 15,
  },
  loginButtonContainer: {
    width: '100%',
  },
  loginButton: {
    backgroundColor: 'blue',
  },
});

export default Login;
