import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { Category } from '../redux'

interface CategoryProps{ 
    item: Category;
    onTap: Function;

 }
const CategoryCard: React.FC<CategoryProps> = ({ item, onTap }) => {

return (

    <TouchableOpacity style={styles.container} onPress={() => onTap(item)}>
        <View>
            <Text style={{fontSize: 15, textAlign:'center', color: '#00609C'}} >{item.title}</Text>
        </View>
        <View style={{marginTop:10}}>
            <Image source={item.icon} style={{ width: 76, height: 76, }} />
        </View>
    </TouchableOpacity>
)
}


const styles = StyleSheet.create({
    container: {width: 140, height: 160, marginLeft:20, borderRadius:10, marginBottom:15, 
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 40,
        elevation:  11,
        backgroundColor:'white',
         justifyContent: 'center', alignItems: 'center'}
})

 export { CategoryCard }