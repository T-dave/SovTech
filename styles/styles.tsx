import styled from "styled-components/native";



export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TopView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px 10px 20px;
`;

export const StyledTextInput = styled.TextInput`
  width: 80%;
  height: 40px;
  background-color: #eee;
  border: 1px solid black;
  border-radius: 7px;
  padding: 7px;
`;

export const HomeView = styled.TouchableOpacity`
  align-items:center;
  margin:20px;
`;

export const Search = styled.TouchableOpacity`
  align-items:center;
  margin:20px;
  background-color: #1E83EC55;
  border: 1px solid #1E83EC;
  border-radius: 7px;
  padding: 7px;
`;

export const CategoryView = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #1E83EC;
  height:100px;
  width:90px;
`;

export const CategoryText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: normal;
`;

export const TopBar = styled.View`
  align-items:center;
  flex-direction: row;
  background-color:#fff;
  
`;

export const StyledPressable = styled.TouchableOpacity`
  padding: 10px 30px 10px 20px;
`;

export const Refresh = styled.TouchableOpacity`
  align-items:center;
  justify-content:center;
  margin-top:50px;
  border-radius:8px;
  padding:10px;
  background-color:#1E83EC;
`;

export const RefreshText = styled.Text`
  color:white;
`;

export const TopText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;


export const QuoteView = styled.View`
  margin: 20px;
  border-bottom-width: 1px
  border-bottom-color: #1E83EC;  
  padding-bottom: 10px;
`;