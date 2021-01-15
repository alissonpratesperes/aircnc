import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import api from '../services/api';

    function SpotList({ tech, navigation }) {
        const [spots, setSpots] = useState([]);
        
            useEffect( () => {
                async function loadSpots() {
                    const response = await api.get('/spots', { params: { tech } });
                        setSpots(response.data);  
                }
                    loadSpots();
            }, []);

                function handleNavigate(id) {
                    navigation.navigate('Book', { id });
                }

                    return (
                        <View style={styles.container}>
                            <Text style={styles.title}> Empresas que usam <Text style={styles.bold}> {tech} </Text> </Text>
                                <FlatList style={styles.list} data={spots} keyExtractor={spot => spot._id} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
                                    <View style={styles.listItem}>
                                        <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url }}/>
                                            <Text style={styles.company}> {item.company} </Text>
                                            <Text style={styles.price}> { item.price ? `Diária de R$${ item.price },00` : 'Diária Gratuita' } </Text>
                                                <TouchableOpacity onPress={() => handleNavigate(item._id)} style={styles.button}>
                                                    <Text style={styles.buttonText}> Reservar Spot </Text>
                                                </TouchableOpacity>
                                    </View>
                                ) }/>
                        </View>
                    ); 
            
    }

        const styles = StyleSheet.create({
            container: {
                marginTop: 15,
                marginBottom: 15
            },
            title: {
                fontSize: 20,
                color: '#444444',
                paddingHorizontal: 20,
                marginBottom:15
            },
            bold: {
                fontWeight: 'bold',
                color: '#E14F50',
            },
            list: {
                paddingHorizontal: 20
            },
            listItem: {
                marginRight: 15,
                backgroundColor: '#E8EBF7',
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 10
            },
            thumbnail: {
                width: 200,
                height: 120,
                resizeMode: 'cover',
                borderRadius: 10,
                alignSelf: 'center'
            },
            company: {
                fontSize: 27,
                fontWeight: 'bold',
                color: '#444444',
                marginTop: 5,
                alignSelf: 'center'
            },
            price: {
                fontSize: 17,
                color: '#E14F50',
                marginTop: 5,
                alignSelf: 'center'
            },
            button: {
                height: 32,
                backgroundColor: '#F05A5B',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: 15
            },
            buttonText: {
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: 17,
                textTransform: 'uppercase'
            },
        });

            export default withNavigation(SpotList);
