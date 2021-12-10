import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, ImageSourcePropType } from 'react-native'

interface ButtonProps{ 
    onTap: Function;
    width: number;
    height: number;
    title: string,
    isNoBg?: boolean
 }

const ButtonWithTitle: React.FC<ButtonProps> = ({ onTap, width, height, title, isNoBg = false }) => {

    if(isNoBg){
        return (
            <TouchableOpacity style={[styles.btn1, { width, height, backgroundColor:'transparent' } ]} 
                onPress={() =>  onTap()}
            > 
                <Text style={{ fontSize: 9, color: '#00609B', }}>{title}</Text>
            </TouchableOpacity>
        )
    }else{
        
        return (
            <TouchableOpacity style={[styles.btn, { width, height, backgroundColor:"#005F9C"} ]} 
                onPress={() =>  onTap()}
            >
                <Text style={{ fontSize: 13, color: '#FFF'}}>{title}</Text>
            </TouchableOpacity>
        )


    }

}


const styles = StyleSheet.create({
    btn: { 
        flex: 1,
        display: 'flex',  
        maxHeight: 45,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f15b5d',
        borderRadius:100,
        alignSelf: 'center',
    },
    btn1: { 
        flex: 1,
        display: 'flex',  
        maxHeight: 30,
        paddingHorizontal:60,
        justifyContent: 'flex-start', 
        alignItems:'flex-end',
        backgroundColor: '#f15b5d',
      
    },
    
})

 export { ButtonWithTitle }