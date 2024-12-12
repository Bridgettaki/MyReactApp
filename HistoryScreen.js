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

    const HistoryScreen = ({ navigation, route }) => {
        const [count, setCount] = useState(0);
        const [title, setTitle] = useState("");
        
      
        return (
          <View style={{ flex: 1, backgroundColor: 'cadetblue' }}>
          <View style = {styles.body}>
            <View>
              <View style = {styles.header}>
                <Text style = {styles.title}>History</Text>
              </View>
              </View>
            </View>
            <TextInput style = {styles.input}
                      underlineColorAndroid="transparent"
                      placeholder="Title"
                      placeholderTextColor="#9a73ef"
                      autoCapitalize="none"
                      multiline styles= {styles.none}
                      
          ></TextInput>
          <Button style={styles.buttonChange} title='Last three books read'
              onPress={() => { 
              //Passand merge params back to history screen
              navigation.navigate('History',{
              params: {post: postText},
              merge: true,
          Title,}
            )
            }
            }/>
            <Text style={styles.welcomePage}>Last book read: {route.params?.title} by {route.params?.author} 
            </Text>
            <ScrollView>
              <View style={styles.ImageBackground}>
                <Text></Text>
                <Image style= {styles.small} source={require('./Image/police.png')}/>
                <Text></Text>
                <Image style= {styles.small} source={require('./Image/grey.png')}/>
                <Text></Text>
                <Image style= {styles.small} source={require('./Image/brie.png')}/>
              </View>
            </ScrollView>
          </View>
        )
      };





}