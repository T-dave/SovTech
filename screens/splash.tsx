import React from "react";
import { SafeAreaView, Text, Image } from 'react-native';
import {Container} from '../styles/styles';


const Splash = ({navigation})=>{
    setTimeout(() => {
        navigation.navigate('Home');
    }, 3000);
    return(
        <Container style={{flex:1, backgroundColor:'#1E83EC'}}>
            <Image source={require('../assets/sov.png')}/>
        </Container>
    )
}
export default Splash;