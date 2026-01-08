import { StatusBar,StyleSheet, useColorScheme,View , Image,useWindowDimensions} from "react-native";
import { Button, Icon, TextInput, Text,Card, Cover,Avatar } from "react-native-paper";

// import Burger_Logo from 'src/assets/Burger_Logo.jpg';

// import{MaterialDesignIcons} from "@react-native-vector-icons/material-design-icons";

const LoginPage = ({navigation})=> {
    
const { width, height } = useWindowDimensions();
    return(
      
     <View style = {style.container}>
      <View style = {style.logobox}>
        <Image 
          source={require('./assets/Instalogo.png')}
          style={style.Image}
        ></Image>
        {/* <Avatar.Image size={80} source={require('./assets/Burger_Logo.jpg') } /> */}
        {/* <Card>
    <Card.Cover source={{ Burger_Logo }} />
  </Card> */}
      </View>
      <View style = {{...style.signInbox,    width: width*0.7}}>
            <TextInput

            style = {style.input}
      label="Phone number, username or email"
      
      onChangeText={text => setText(text)}
    />

    <TextInput 
     style = {{...style.input, width : width*0.7}}
      label="Password"
    
      onChangeText={text => setText(text)}
    />
      </View>
      <View style = {{...style.buttonBox , width : width*0.7}}>
          <Button  mode="contained" onPress={() => console.log('Pressed')}>
            


    login
  </Button>
  <Text> _____________     OR     ____________</Text>
  <Text style = {{...style.withfacebook , width: width*0.5}}>  Login with Facebook       
    </Text>
       <Button  mode="contained" onPress={() =>navigation.navigate('Signup')}>
    Sign Up
  </Button>

      </View>

     </View>




  
    )
}
const style = StyleSheet.create({
    container: {
        flex : 1,
    backgroundColor:'white'
  
  
    },
    logobox: {
      flex: 0.3,
      
      justifyContent: 'flex-end',
      width: 100, height: 50,
      alignSelf: 'center'
     
    },

    signInbox: {
      flex:0.25,
       width: 300, height: 50,
       alignSelf: 'center',
       
      justifyContent: 'space-evenly'
    },
    buttonBox:{
      justifyContent:'space-around',
     flex:0.3,
       width: 200,
        height: 50,
       alignSelf: 'center',
    } ,
    input: {
  
    height: 50, // Sets a specific height for the input field
    borderColor: 'gray', // Adds a border color
    borderWidth: 2, // Sets the border width
    // borderRadius: 25, // **Makes the corners round (half of height for perfect oval)**
    paddingHorizontal: 15, // Adds horizontal padding for text
    // borderTopLeftRadius: 25,    // Very round top-left
    // borderTopRightRadius: 25,   // Slightly round top-right
    // borderBottomLeftRadius: 25, // Slightly round bottom-left
    // borderBottomRightRadius: 25, 
  },
  Image: {
    alignSelf: 'center',

    height: 70,
    width : 200
  },
  withfacebook: {
    alignSelf: 'center',
    color: '#2600ffff',
    fontWeight: 'bold'
  }


}
)
export default LoginPage;



//...........................

// const Task7 = ()=> {
//     return(
//         <View style={{flex:1,justifyContent:'center', backgroundColor: 'black'}}>
//             <TextInput
//       label="Email"
   
//       onChangeText={text => setText(text)}
//     />
//     <TextInput
//       label="password"
      
//       onChangeText={text => setText(text)}
//     />
//              <Button textColor="red"  mode="outlined" onPress={() => console.log('Pressed')}>
//     login
//   </Button>
  
//         </View>
            // <View style={styles.container}>
            //     <View style = {styles.body1}>
            //         <View style= {styles.body3}></View>
            //         <View style= {styles.body4}>
            //             <View style= {styles.body8}>
            //                <View style={styles.body25}></View>
            //                <View style={styles.body23}>
            //                 <View style={styles.body24}></View>
            //                  <View style={styles.body26}>
            //                     <Text> Hello </Text>
            //                  </View>
                           
            //                </View>
                           
            //             </View>
            //             <View style= {styles.body9}>
            //                 <View style= {styles.body10}>
            //                     <View style= {styles.body11}></View>
                        
            //                 </View>
                        
            //             </View>
                        
            //         </View>
            //         <View style= {styles.body5}>
            //             <View style= {styles.body6}></View>
            //         </View>
            //     </View>
            //     <View style = {styles.body2}>
            //         <View style= {styles.body7}>
            //             <View style= {styles.body12}>
            //                 <View style= {styles.body13}>
            //                      <View style= {styles.body27}></View> 
            //                 </View>
            //                 <View style= {styles.body14}>
                               
            //                 </View>
                        
                            
            //             </View>
            //              <View style= {styles.body16}>
            //                 <View style= {styles.body17}></View>
            //                 <View style= {styles.body18}></View>
                        
                            
            //             </View>
            //              <View style= {styles.body20}>
            //                 <View style= {styles.body21}></View>
            //                 <View style= {styles.body22}></View>
                          
                            
            //             </View>
            //         </View>
            //     </View>
            // </View>
        
//     )
// }