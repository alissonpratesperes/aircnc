import React, { useState, useEffect } from 'react';

import { View, AsyncStorage, KeyboardAvoidingView, Platform, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

    function Login({ navigation }) {

        const [email, setEmail] = useState('');

        const [techs, setTechs] = useState('');

            useEffect( () => {

                AsyncStorage.getItem('user').then(user => {

                    if (user) {

                        //navigation.navigate('List');

                    }

                })

            }, []);

            async function handleSubmit() {

                const response = await api.post('/sessions', {

                    email

                })

                    const { _id } = response.data;

                        await AsyncStorage.setItem('user', _id);
                        await AsyncStorage.setItem('techs', techs);

                            navigation.navigate('List');

            }

                return (

                    <KeyboardAvoidingView enabled={ Platform.OS === 'ios' } behavior="padding" style={ styles.container }>

                            <Image source ={ logo }/>

                                <View style={ styles.form }>

                                    <Text style={ styles.label }> SEU E-MAIL <Text style={ styles.span }>*</Text> </Text>

                                        <TextInput style={ styles.input } placeholder="Seu melhor e-mail" keyboardType="email-address" autoCapitalize="none" autoCorrect={ false } value={ email } onChangeText={ setEmail }/>

                                            <Text style={ styles.label }> TECNOLOGIAS <Text style={ styles.span }>*</Text> </Text>

                                                <TextInput style={ styles.input } placeholder="Tecnologias de interesse" autoCapitalize="words" autoCorrect={ false } value={ techs } onChangeText={ setTechs }/>

                                                    <TouchableOpacity onPress={ handleSubmit } style={ styles.button }>

                                                        <Text style={ styles.buttonText }> ENCONTRAR SPOTS </Text>

                                                    </TouchableOpacity>

                                </View>

                    </KeyboardAvoidingView>

                );

    }

        const styles = StyleSheet.create({

            container: {

                flex: 1,

                justifyContent: 'center',

                alignItems: 'center',

            },

            label: {

                fontWeight: 'bold',

                color: '#444444',

                marginBottom: 8,

            },

            span: {

                color: '#E14F50',

            },

            form: {

                alignSelf: 'stretch',

                paddingHorizontal: 30,

                marginTop: 30,

            },

            input: {

                borderWidth: 1,

                borderColor: '#DDDDDD',

                paddingHorizontal: 20,

                fontSize: 16,

                height: 44,

                marginBottom: 20,

                borderRadius: 10,

            },

            button: {

                height: 42,

                backgroundColor: '#F05A5B',

                justifyContent: 'center',

                alignItems: 'center',

                borderRadius: 10,

            },

            buttonText: {

                color: '#FFFFFF',

                fontWeight: 'bold',

                fontSize: 16,

            },

        });


            export default Login;