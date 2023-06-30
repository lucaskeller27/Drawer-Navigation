import React from 'react';
import { View, StyleSheet, Button, Text} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenA() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('screenB')
    }
  
    return (
    <View style={styles.container}>
        <View style={styles.elenco}>
            <View style={styles.pais}>
                <Text>GOL #1</Text>
                <Text>LD #2</Text>
                <Text>ZAG #3</Text>
                <Text>ZAG #4</Text>
                <Text>LE #6</Text>

                <Text>VOL #5</Text>
                <Text>VOL #8</Text>

                <Text>MEI #10</Text>
                <Text>PD #11</Text>
                <Text>PE #9</Text>
                <Text>ATA #7</Text>

            </View>
            <View style={styles.nome}>
                <Text>Zetti</Text>
                <Text>Vítor</Text>
                <Text>Ronaldão</Text>
                <Text>Adilson</Text>
                <Text>Ronaldo Luiz</Text>
                
                <Text>Pintado</Text>
                <Text>T. Cerezo</Text>

                <Text>Raí</Text>
                <Text>Cafu</Text>
                <Text>Palhinha</Text>
                <Text>Müller</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center"
    },

    elenco: {
        flexDirection: 'row',
    },

    pais: {
        marginLeft: '20%',
        marginRight: '40%'

    },

    nome: {
        alignItems: 'right',
        
    },


})