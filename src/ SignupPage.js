import React, { useState } from "react";
import { StatusBar,StyleSheet, useColorScheme,View , Image,useWindowDimensions} from "react-native";
import { Button, Icon, TextInput, Text,Card, Cover,Avatar } from "react-native-paper";

const SignupPage = () => {
    const { width, height } = useWindowDimensions();
   
    const[mobileno, setMobileno] = React.useState('123456789')
    const[password, setPassword] = React.useState('')
    const[Fullname,setFullname] = React.useState('')
    const[Username, setUsername] = React.useState('')
    let data = { 
            "mobileno" : mobileno,
            "password": password,
            "fullName": Fullname,
            "userName": Username
    }
    console.log(data)
    console.log(mobileno)
    return(<View style={styles.container}>
        <View style = {styles.safeArea}></View>
             <View style={styles.logoBox}>
                 <Image 
                          source={require('./assets/Instalogo.png')}
                          style={styles.Image}
                        ></Image>
                        
                        <Text>Sign up to see photos and vidseos from your friends.</Text>
                         <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                          Login with Facebook
                        </Button>
                         <Text> _____________     OR     ____________</Text>
             </View>
            <View style={styles.dataBox}> 
                 <TextInput
                    label="Mobile no "
                    //setMobileno={setMobileno}
                    value={mobileno}
                    onChangeText={text => setMobileno(text)}
                    />
                              <TextInput
                  label="Password"
                  secureTextEntry
                  value={password}
                  right={<TextInput.Icon icon="eye" />}
                   onChangeText={text => setPassword(text)}
                />
                    
                    <TextInput
                    label="Fullname"
                    value={Fullname}
                    onChangeText={text => setFullname(text)}
                    />
                    <TextInput
                    label="Username"
                    value={Username}
                    onChangeText={text => setUsername(text)}
                    />
                 </View>
            <View style={{...styles.signupBox, width : width*0.8}}>
                <Text>People who use our service may have uploaded your contact information to Instagram. Learn More
</Text>
<Text>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</Text>
              
              <Button mode="contained" onPress={() => console.log(data)}>
                
                          SignIn
                        </Button>
                         </View>
                        
            </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'

    },
    safeArea: {
        flex:0.1
    },
    logoBox : {
        flex: 0.3,
        justifyContent: 'space-around',
        alignItems: 'center',
       
      
        
    },
    dataBox : {
        flex: 0.3,
          flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginHorizontal: 10
        
        
    },
     signupBox : {
        flex: 0.3,
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginHorizontal: 20,
        marginVertical:20,
     
        
        
    },
    Image: {
   justifyContent: 'center',

    height: 70,
    width : 200
  },
  
})
export default SignupPage;