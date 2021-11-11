import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function HomeScreen(props){
    return (
        <View style={styles.background}>
         <View style = {[styles.top, {flexDirection: "row"}]}>
           <TextInput
             style = {styles.SearchBar}
             placeholder="Search"
             selectionColor= 'black'
           />
           <TouchableOpacity>
             <FontAwesome name="search" style={styles.StatusButton} size={45} color="black" />
           </TouchableOpacity>
         </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    top: {
      width: "100%",
      height: 50,
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    SearchButton: {
      flex: 2
    },
    SearchBar: {
      flex: 4,
      height: 40,
      borderWidth: 1,
      fontSize: 15,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 15, 
      paddingVertical: 10, 
      borderRadius: 10,
      marginTop: 10,
    },
  
  });  

export default HomeScreen;
