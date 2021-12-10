import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image, Dimensions, Button} from 'react-native'
import { ButtonWithTitle } from '../components/ButtonWithTitle';
import { connect } from 'react-redux';
import { useNavigation } from '../utils'



const screenWidth = Dimensions.get('screen').width
interface LoginProps{ 
    OnUserLogin: Function,
    OnUserSignup: Function,

 }

const _LoginScreen: React.FC<LoginProps> = ({ OnUserLogin, OnUserSignup}) => {

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('')
    const [title, setTitle] = useState('Login')
    const [isSignup, setIsSignup] = useState(false)
    
    const { navigate } = useNavigation()

    const onTapLogin = () => {
        navigate("HomePage");
      };

    const onTapAuthenticate = () => {

        if(isSignup){
           OnUserSignup(email, password);
        }else{
            OnUserLogin(email, password)
        }

    }

    const onTapOptions = () => {
        setIsSignup(!isSignup)
        setTitle(!isSignup ? 'Signup' : 'Login')
    }

return (<View style={styles.container}>
    <View style={styles.circulo}></View>
    <View style={styles.navigation}>
        <Image source={require('../images/uni2.png')} style={styles.upn} />
    </View>
    <View style={styles.body}>
            <View style={styles.box}>
                <Text style={{ color: '#004275', fontSize: 30, textAlign:'center',marginBottom:15}}>Iniciar Sesión</Text>
                    <TextInput style={styles.input} placeholder="Correo Institucional" placeholderTextColor="#00609C"  onChangeText={setEmail}  
                    />
                    <Image
                        style={styles.icono2}
                        source={require('../images/email.png')}
                        />
                {isSignup && <TextInput placeholder="Phone Number" onChangeText={setPhone} />}
                <TextInput style={styles.input}  placeholder="Contraseña" placeholderTextColor="#00609C" secureTextEntry={true} onChangeText={setPassword}  />
                <Image
                        style={styles.icono}
                        source={require('../images/passw.png')}
                        />                       
                <ButtonWithTitle 
                    title={!isSignup ? "¿Problemas para ingresar?" : "Have an Account? Login Here"} 
                    height={50}
                    width={350} 
                    onTap={onTapOptions} 
                    isNoBg={true}/>
                <ButtonWithTitle
                    title="INGRESAR"  
                    height={60}
                    width={140} 
                    onTap={onTapLogin} 
                    />
            </View>
    </View>
    <View style={styles.footer}>
        <Text style={{ color: '#005F9C', fontSize: 11 ,marginTop:100}}>¿No tiene una cuenta? 
            <Text style={{ color:'#005F9C', fontSize: 11, fontWeight:'bold' }}> Entrar como invitado</Text>
            </Text>
     
        <Text style={{ color: '#00609B', fontSize: 9, marginTop:60}}>Al ingresar, acepta nuestros
            <Text style={{ color:'#00609B', fontSize: 9, textDecorationLine: 'underline', fontWeight:'bold' }}> Términos y condiciones</Text>
            </Text>
        
    </View>
</View>)}

const styles = StyleSheet.create({
container: { flex: 1,},
navigation: { flex: 5.5,justifyContent: 'center', alignItems: 'center'},
body: { flex: 5, justifyContent: 'center', alignItems: 'center'},
footer: { flex: 4, justifyContent: 'center', alignItems: 'center' },
circulo:{
    backgroundColor: "#00609C",
    borderRadius: (screenWidth+300)/2,
    position: 'absolute',
    top: -105,
    left:-156,
    width: screenWidth+300,
    height: screenWidth+300,
},
input:{
    height: 40,
    width:260,
    margin: 12,
    borderWidth: 1,
    borderColor:'#00609C',
    borderRadius:100,
    fontSize:11,
    paddingLeft : 20,
    
    
},
icono:{
    width: 19.5,
    height: 22,
    position: 'absolute',
    right:30,
    top:192
},
icono2:{
    width: 20,
    height: 20,
    position: 'absolute',
    right:30,
    top:128

},
boton:{
    width: 150,
    height: 50,
    backgroundColor:'#005F9C',
    borderRadius:100,
    justifyContent: 'center', alignItems: 'center'
},
box:{
    width: 280,
    height: 350,
    backgroundColor:'#fff',
    borderRadius:10,
    marginTop:50,
    justifyContent: 'center', alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
	width: 0,
	height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation:  10,
},

upn:{
    width:290,
    height:210,
    
}
})



 export { _LoginScreen }