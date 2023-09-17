import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Register() {
    const navigation = useNavigation();
    const handleLoginPress = () => {
        navigation.navigate('Login');
    };
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    correo: '',
    telefono: '',
    sexo: 'masculino',
    direccion: '',
    codigoPostal: '',
    contrasena: '',
    nacionalidad: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={formData.nombre}
        onChangeText={(text) => handleChange('nombre', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        value={formData.edad}
        onChangeText={(text) => handleChange('edad', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={formData.correo}
        onChangeText={(text) => handleChange('correo', text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={formData.telefono}
        onChangeText={(text) => handleChange('telefono', text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Dirección"
        value={formData.direccion}
        onChangeText={(text) => handleChange('direccion', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Código Postal"
        value={formData.codigoPostal}
        onChangeText={(text) => handleChange('codigoPostal', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={formData.contrasena}
        onChangeText={(text) => handleChange('contrasena', text)}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Nacionalidad"
        value={formData.nacionalidad}
        onChangeText={(text) => handleChange('nacionalidad', text)}
      />
      <Button title="Guardar" onPress={handleSubmit} />
      <Button title="Cancelar" onPress={(handleLoginPress)} />
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
});

export default Register;
