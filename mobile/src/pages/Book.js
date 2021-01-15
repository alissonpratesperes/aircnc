import React, { useState } from 'react';
import { SafeAreaView, Alert, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, Text, KeyboardAvoidingView, Platform } from 'react-native';
import api from '../services/api';

    function Book({ navigation }) {
        const [ date, setDate ] = useState('');
        const id = navigation.getParam('id');

            async function handleSubmit() {
                const user_id = await AsyncStorage.getItem('user');
                    await api.post(`/spots/${id}/bookings`, { date }, { headers: { user_id } });
                        Alert.alert('Reserva do Spot solicitada!');
                            navigation.navigate('List');
            }

            function handleCancel() {
                navigation.navigate('List');
            }

                return (
                    <KeyboardAvoidingView enabled={ Platform.OS === 'ios' } behavior="padding" style={styles.container}>
                        <Text style={styles.label}> DATA DE RESERVA <Text style={styles.span}>*</Text> </Text>
                            <TextInput style={styles.input} placeholder="Sua melhor data para a reserva desse spot" placeholderTextColor="#DDDDDD" autoCapitalize="words" autoCorrect={false} value={date} onChangeText={setDate}/>
                                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                                    <Text style={styles.buttonText}> SOLICITAR RESERVA </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleCancel} style={[ styles.button, styles.cancelButton ]}>
                                    <Text style={styles.buttonText}> CANCELAR RESERVA </Text>
                                </TouchableOpacity>
                    </KeyboardAvoidingView>
                );
    }

        const styles = StyleSheet.create({
            container: {
                marginLeft: 30,
                marginTop: 'auto',
                marginRight: 30,
                marginBottom: 180
            },
            label: {
                fontWeight: 'bold',
                color: '#444444',
                marginLeft: 17,
                marginBottom: 8,
            },
            span: {
                color: '#E14F50',
            },
            input: {
                borderWidth: 1,
                borderColor: '#DDDDDD',
                paddingHorizontal: 20,
                fontSize: 15,
                color: '#444444',
                height: 44,
                marginBottom: 20,
                borderRadius: 10
            },
            button: {
                height: 42,
                backgroundColor: '#F05A5B',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 10
            },
            cancelButton: {
                backgroundColor: '#E8EBF7'
            },
            buttonText: {
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: 17,
                textTransform: 'uppercase'
            }
        });

            export default Book;