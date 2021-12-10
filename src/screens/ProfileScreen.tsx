import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Button, Linking } from 'react-native'
import { connect } from 'react-redux'
import { ButtonWithIcon } from '../components'
import { useNavigation } from '../utils'




const _ProfileScreen = () =>  {

    const { navigate } = useNavigation()

    const onTapBack = () => {
        navigate("Landing");
      };
    
      const onTapHome= () => {
        navigate("HomePage");
      };
    
      const Enlaces= (props:any) => {
        return (
            
                <View style={styles.link} >
                    <Text style={styles.maes} onPress={() => Linking.openURL(props.link)}>{props.title}</Text>
                </View>
           
        );
      }
        return ( 
            <View style={styles.container}>
                <View style={styles.navigation}>
                    <View style={{  flex: 1,display: 'flex', marginHorizontal:40, marginVertical:70}}>
                        <Text style={{ color:'white',fontSize: 30}}>Perfil</Text>
                    </View>
                    <View style={{ position: 'relative' }}>
                        <View style={styles.absolute}>
                            <ButtonWithIcon icon={require('../images/menu.png')} onTap={onTapHome}  width={42} height={42}/>
                        </View>
                        <View style={styles.absolute2}>
                            <ButtonWithIcon icon={require('../images/logout.png')} onTap={onTapBack}  width={30} height={30}/>
                        </View>
                        <View style={styles.absolute3}>
                        <Image
                            style={{
                                width: 130,
                                height: 130,
                                borderRadius:20
                                }}
                            source={require('../images/cLopez.png')}
                            />
                        </View>
                        <View style={styles.absolute4}>
                            <Text style={styles.maes}>Maestría en Educación</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={{marginTop:70, marginHorizontal:30}}>
                            <Text style={styles.name}>Carlos Hernán López Ruiz</Text>
                            <Text style={styles.code}>Código: 2020181021</Text>
                            <Text style={styles.state}>Estado: <Text style={{ color:'#18B81D', fontSize: 16 }}> 2021-2 Activo
                            </Text>
                            </Text>
                            </View>
                        <View style={{ borderBottomColor: '#00609C', borderBottomWidth: 3, marginHorizontal:30}} />
                        <Text style={styles.enlace}>Enlaces de interés</Text>
                            <Enlaces title='Recibos complementarios' link='https://pagos.pedagogica.edu.co/pagosUPN/' />
                            <Enlaces  title='Sigan' link='http://sigan.pedagogica.edu.co/sigan/'/>
                            <Enlaces title='GOAE' link='http://goae.pedagogica.edu.co/' />
                            <Enlaces title='Restaurante' link='http://bienestar.pedagogica.edu.co/asignacion-del-servicio-de-restaurante/' />
                      
                    </View>
                    
            </View>
        );
};


const styles = StyleSheet.create({
container: { flex: 1},
navigation: { flex: 4, backgroundColor:'#00609C' },
body: { flex: 9},
footer: { flex: 2, justifyContent: 'center', paddingLeft: 10, paddingRight: 10 },
amountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
  },
  maes:{ color: '#7D8287', fontSize: 13, fontWeight:'700',textAlign:'center'},
  name:{color: '#00609C', fontSize: 17, fontWeight: "bold", marginBottom:6 },
code:{color: '#00609C', fontSize: 15, marginBottom:6},
state:{color: '#00609C', fontSize: 16, marginBottom:25},
enlace:{color: '#7D8287', fontWeight: "bold", fontSize: 15, marginTop:25,marginBottom:20, marginHorizontal:30},
  absolute: {
    position: 'absolute',
    top: -145,
    right:20
  },
  absolute2: {
    position: 'absolute',
    top: -60,
    right:20
  },
  absolute3: {
    position: 'absolute',
    top: -70,
    left:20
  },
  absolute4: {
    width: 190,
    height: 30,
    backgroundColor:'#fff',
    position: 'absolute',
    top: -15,
    right:7,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  link:{
    marginHorizontal:20,
    marginVertical:5,
    width: 150,
    height: 50,
    justifyContent:'center',
    backgroundColor:'#fff',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    borderRadius:10,
    
     
  }
})

 export { _ProfileScreen }