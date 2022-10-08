import React, { useState, useEffect } from "react";
import axios from 'axios';
import { SafeAreaView, Text, Image, FlatList, View, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import {Container, HomeImg, HomeView, StyledTextInput, Search, TopView, CategoryView, CategoryText} from '../styles/styles';


const Home = ({navigation})=>{
    const [categories, setCategories] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [search, setSearch] = useState('');
    const handleSearch = ()=>{
        if(search.length < 3){
            alert('Search text should be three or more letters');
        }else{
            navigation.navigate('Search', {query:search});
        }
    }
    const handleCategory = () => {
        axios
          .get('https://api.chucknorris.io/jokes/categories')
          .then(function (response) {
            // handle success
            setCategories(response.data);
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
            <TopView>
                <StyledTextInput onChangeText={(val)=>setSearch(val)}/>
                <Search onPress={()=>handleSearch()}>
                    <Text>Search</Text>
                </Search>
            </TopView>
            <Container style={{flex:1}}>
            {
                !loaded ?
                <ActivityIndicator size="large" color="#1E83EC" />
                :
                <FlatList
                data={categories}
                numColumns={3}
                showsVerticalScrollIndicator = {false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <HomeView onPress={()=>navigation.navigate('Quote', {category:item})}>
                        <CategoryView>
                            <CategoryText>{item.charAt(0).toUpperCase() + item.slice(1)}</CategoryText>
                        </CategoryView>
                    </HomeView>
                    
                    )}
            />
            }
        </Container>
        </SafeAreaView>
        
    )
}
export default Home;