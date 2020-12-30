import React from 'react';

import { SafeAreaView, AsyncStorage, Text } from 'react-native';

    function Book({ navigation }) {

        const id = navigation.getParam('id');

        return (

            <SafeAreaView>
        
                <Text> { id } </Text>

            </SafeAreaView>

        )

    }

        export default Book;