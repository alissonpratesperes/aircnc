import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Image, AsyncStorage } from 'react-native';
import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';

    function List() {
        const [ techs, setTechs ] = useState([]);

            useEffect( () => {
                AsyncStorage.getItem('user').then(user_id => {
                    const socket = socketio('http://192.168.0.101:3333', { query: { user_id } })
                        socket.on('booking_response', booking => {
                            Alert.alert(`Sua solicitação de reserva em ${booking.spot.company} para ${booking.date} foi ${booking.approved ? 'ACEITA' : 'REJEITADA'}`)
                        })
                })
            }, []);

            useEffect( () => {
                AsyncStorage.getItem('techs').then( storagedTechs => {
                    const techsArray = storagedTechs.split(',').map( tech => tech.trim() );
                        setTechs(techsArray);
                } )
            }, []);

                return (
                    <SafeAreaView style={styles.container}>
                        <Image style={styles.logo} source={logo}/>
                            <ScrollView>
                                { techs.map( tech => <SpotList key={tech} tech={tech}/> ) }
                            </ScrollView>
                    </SafeAreaView>
                );
    }

        const styles = StyleSheet.create({
            container: {
                flex: 1,    
            },
            logo: {
                height: 35,
                resizeMode: 'contain',
                alignSelf: 'center',
                marginTop: 15,
                marginBottom: 15
            },
        });

            export default List;