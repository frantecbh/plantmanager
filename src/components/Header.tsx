import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import colors from '../styles/colors';

import userImg from '../assets/imageperfil.png'
import fonts from '../styles/fonts';

export function Header(){
  return(
    <View style={styles.container}>
      <View>
          <Text style={styles.greeting}>Olá</Text>
          <Text style={styles.userName}>Francisco</Text>
      </View>
      <Image source={userImg} style={styles.image}/> 
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 40, 
   
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },

    greeting:{
      fontSize: 32,
      color: colors.heading,
      fontFamily: fonts.text,
    },

    userName:{
      fontSize: 32,
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 40
    }
})

