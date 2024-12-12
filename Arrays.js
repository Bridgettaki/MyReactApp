import React from 'react';
import  { useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list'
import{NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SelectDropdown from 'react-native-select-dropdown'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  View,
  TextInput,
  Button, 
  ImageBackground,
  TouchableHighlightBase,
  TouchableHighlight,
  requireNativeComponent,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {

<Text> {route.params?.title}, {route.params?.genre}, {route.params?.author}, {route.params?.totalPages}
       {route.params?.averagePages}</Text>

const [count, setCount] = useState(0);

 //Passand merge params back to history screen

 var Author="";
 var Title="";
 var Genre="";
 var pages=0;
 var averagePages=0;
 var totalPages=0;

 const books =["Horror","Fiction","Non-fiction","Romance","Sci-fi","Action"];
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [numberofpages, setNumberOfPages] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [averagePages, setAveragePages] = useState(0);

<SelectDropdown>
        data= {books}
        onSelect={(selectItem,index) =>{console.log(
          selectedItem,index)
          }}

          buttonTextAfterSelection={(selectedItem,index) =>{
            //text represented after item is selected
            //if data array is an array of objects then return selectedItem
          }}
          rowTextForSelection={(item,index) =>{
            //text represented for each item in dropdown
            //if data array is an array of objects then return item.property to represent item in dropdown return item
          }}
        </SelectDropdown>   

const [genreArray] = useState (["horror","death","kill","lovebirds","fiction","nonfiction","Romance"])
const [length] = useState('');

<SelectDropdown>
data= {books}
onSelect={(selectItem,index) =>{console.log(
  selectedItem,index)
  }}

  buttonTextAfterSelection={(selectedItem,index) =>{
    //text represented after item is selected
    //if data array is an array of objects then return selectedItem
  }}
  rowTextForSelection={(item,index) =>{
    //text represented for each item in dropdown
    //if data array is an array of objects then return item.property to represent item in dropdown return item
  }}
</SelectDropdown>   


  
  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        genre={genreArray} 
        /> 
  );
};

