import React, { useState, useEffect } from "react";
import axios from 'axios';
import { SafeAreaView, Text, Image, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import {Container, Refresh, RefreshText, TopBar, TopText, StyledPressable} from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';


const Quote = ({route, navigation})=>{
    const category = route.params.category;
    const [quote, setQuote] = useState('');
    const [loaded, setLoaded] = useState(false);
    const handleCategory = () => {
        axios
          .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
          .then(function (response) {
            // handle success
            setQuote(response.data.value);
            setLoaded(true);
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          });
      };
      useEffect(()=>handleCategory(), []);
    return(
        <SafeAreaView style={{flex:1, paddingTop:30}}>
            <TopBar>
            <StyledPressable onPress={()=>navigation.goBack()}>
                <Icon name="arrowleft" size={30} color="#000" />
            </StyledPressable>
                <TopText>{category.charAt(0).toUpperCase() + category.slice(1)}</TopText>
            </TopBar>
            <Container style={{flex:1}}>
            {
                !loaded ?
                <ActivityIndicator size="large" color="#1E83EC" />
                :
                <Text style={{margin:10}}>{quote}</Text>
            }
                <Refresh onPress={()=>handleCategory()}>
                    <RefreshText>Refresh</RefreshText>
                </Refresh>
            </Container>
        </SafeAreaView>
        
    )
}
export default Quote;