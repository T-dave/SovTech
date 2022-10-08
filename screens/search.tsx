import React, { useState, useEffect } from "react";
import axios from 'axios';
import { SafeAreaView, Text, Image, View, ActivityIndicator, FlatList } from 'react-native';
import {Container, Refresh, RefreshText, QuoteView} from '../styles/styles';


const Search = ({route})=>{
    const query = route.params.query;
    const [quotes, setQuotes] = useState([]);
    const [total, setTotal] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const handleCategory = () => {
        axios
          .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
          .then(function (response) {
            // handle success
            setQuotes(response.data.result);
            setTotal(response.data.total)
            setLoaded(true);
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          });
      };
      useEffect(()=>handleCategory(), []);
    return(
        <SafeAreaView style={{flex:1, alignItems:'center', padding:20}}>
            {
                !loaded ?
                <ActivityIndicator size="large" color="#1E83EC" />
                :
                total== 0 ?
                <Text style={{margin:10}}>No result found!!!</Text>  
                :
                <FlatList
                data={quotes}
                showsVerticalScrollIndicator = {false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <QuoteView>
                        <Text>{item.value}</Text>  
                    </QuoteView>                  
                    )}
            />
            }

        </SafeAreaView>
    )
}
export default Search;