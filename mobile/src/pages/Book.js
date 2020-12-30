import React, { useState } from 'react';

import api from '../services/api';

import { StyleSheet, TextInput, TouchableOpacity, AsyncStorage, Text, KeyboardAvoidingView, Alert } from 'react-native';

    function Book({ navigation }) {

        const [date, setDate] = useState('');

        const id = navigation.getParam('id');

            async function handleSubmit() {

                const user_id = await AsyncStorage.getItem('user');

                await api.post(`/spots/${id}/bookings`, {

                    date

                }, {

                    headers: { user_id }

                })

                    Alert.alert('Solicitação de reserva enviada!');

                        navigation.navigate('List');

            }

            function handleCancel(){

                navigation.navigate('List');

            }

                    return (

                        <KeyboardAvoidingView enabled={ Platform.OS === 'ios' } behavior="padding" style={ styles.container }>
                    
                            <Text style={ styles.label }> DATA DESEJADA <Text style={ styles.span }>*</Text> </Text>

                                <TextInput style={ styles.input } placeholder="Qual data você gostaria de reservar?" autoCapitalize="words" autoCorrect={ false } value={ date } onChangeText={ setDate }/>

                                    <TouchableOpacity onPress={ handleSubmit } style={ styles.button }>

                                        <Text style={ styles.buttonText }> SOLICITAR RESERVA </Text>

                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={ handleCancel } style={ [styles.button, styles.cancelButton] }>

                                        <Text style={ styles.buttonText }> CANCELAR </Text>

                                    </TouchableOpacity>

                        </KeyboardAvoidingView>

                    )

    }

        const styles = StyleSheet.create({

            container: {

                marginLeft: 30,

                marginTop: 'auto',

                marginRight: 30,

                marginBottom: 'auto',

            },

            label: {

                fontWeight: 'bold',

                color: '#444444',

                marginLeft: 16,

                marginBottom: 8,

            },

            span: {

                color: '#E14F50',

            },

            input: {

                borderWidth: 1,

                borderColor: '#DDDDDD',

                paddingHorizontal: 20,

                fontSize: 16,

                height: 44,

                marginBottom: 25,

                borderRadius: 10,

            },

            button: {

                height: 42,

                backgroundColor: '#F05A5B',

                justifyContent: 'center',

                alignItems: 'center',

                borderRadius: 10,

                marginTop: 25,

            },

            cancelButton: {

                backgroundColor: '#CCCCCC',

                marginTop: 25,

                marginBottom: 50,

            },

            buttonText: {

                color: '#FFFFFF',

                fontWeight: 'bold',

                fontSize: 16,

            },

        });

        export default Book;