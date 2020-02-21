import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import Items2 from './Items2'

import { LinearGradient } from 'expo-linear-gradient'
// import HeaderNavigationBar from './HeaderNavigationBar'
import database from './Database'
import database2 from './Database2'
export default class Page1 extends React.Component {


  state = {
    text: null
  };

  componentDidMount() {
    this.update();
  }

  onChangeText = text => this.setState({ text });

  onPressAdd = () => {
    this.addText();
    this.setState({ text:null});

    this.textInput.clear() 
  };

  addText() {
    if (this.state.text === null || this.state.text === "") {
      return false;
    }

    database2.putText(this.state.text, this.add_text_success, this.add_text_fail);


  };

  add_text_success=async()=>{
    this.update();
  }

  add_text_fail=async(error)=>{
    console.log("already add ");
  }

  change_Complete=(id)=>{
    database2.updateText2(id);
    this.update();
  }

  change_Doing=(id)=>{
    database2.updateText(id);
    this.update();
  }


  delete_Complete=(id)=>{
    database2.deleteText(id);
    this.update();
  }

  update (){
    this.todo.update();

  };


  render() {
    return (
    


        <View style={{flex:1,justifyContent: 'center', marginTop:16,}}>
              <View style={{flex: 1, flexDirection: 'row', alignSelf:'center', marginTop:16, }}>
                <View>
                  <TextInput
                  ref={input => { this.textInput = input }} 
                  style={styles.txtIn2}
                  placeholder="insert item"
                  onChangeText={this.onChangeText}
                  />
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.btn_register}
                    onPress={this.onPressAdd}>
                    <Text style={{fontSize:20, color:'#ffffff',textAlign:'center'}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{flex: 7,flexDirection:'column', marginTop:16}}>
                  <ScrollView style={styles.listArea}>
                      
                    <Items2
                        ref={todo => (this.todo = todo)}
                        onPressTodo={this.delete_Complete}
                          />
                    
                   </ScrollView>
                
              </View>
        </View> 
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  flexRow: {
    flexDirection: "row"
  },
  input: {
    borderColor: "#4630eb",
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 48,
    margin: 16,
    padding: 8
  },
  listArea: {
    backgroundColor: "transparent",
    flex: 1,
    // paddingTop: 16
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8
  },
  nameInput: {
        alignItems: 'center',
        height:50,
        backgroundColor: 'transparent',
        padding: 5,
        margin:5,
        borderRadius: 50,
        borderColor:'white',
        borderWidth : 1,
        fontSize:20,
    },
    buttonText: {
        alignItems: 'center',
        height:50,
        backgroundColor: '#86A8E7',
        padding: 10,
        margin:5,
        borderRadius: 50,
        borderColor:'white',
        borderWidth : 1,
        fontSize:30,
        color:'#ffffff'
    },
    touchableUser:{
      alignItems: 'center',
      padding:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1,
      margin:5,
      marginTop:2,
    },
    btn:{
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
    },
    txt:{
      textAlign: 'center',
      fontSize:50
    },

    txtIn2: {
      alignItems: 'center',
      width:280,
      height:50,
      backgroundColor: 'transparent',
      padding: 16,
      marginLeft:16,
      marginRight:16,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 50,
    },

    btn_register:{
      alignItems: 'center',
      width:50,
      height:50,
      backgroundColor: '#000000',
      padding: 16,
      marginRight:16,
      borderRadius: 50,
      borderColor:'#000000',
      borderWidth : 1
    },



});