import { StyleSheet,StatusBar,View,useColorScheme } from 'react-native';
import { Button,Icon,TextInput,Text } from 'react-native-paper';
import { MaterialDesignIcons } from "@react-native-vector-icons/material-design-icons";



const Task7 = ()=> {
    return(
        <View style={{flex:1,justifyContent:'center', backgroundColor: 'black'}}>
            <TextInput
      label="Email"
   
      onChangeText={text => setText(text)}
    />
    <TextInput
      label="password"
      
      onChangeText={text => setText(text)}
    />
             <Button textColor="red"  mode="outlined" onPress={() => console.log('Pressed')}>
    login
  </Button>
  
        </View>
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
        
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection: 'column',
    flex:1
    
},
body1:{
    flex:0.5,
    backgroundColor:'olive'
},
body3:{
    flex:0.05,
    backgroundColor: 'green'
},
body4:{
    flex:0.7,
    backgroundColor: 'white'
},
body5:{
    flex:0.2,
    flexDirection:'row',
    backgroundColor: 'blue'
},
body6:{
    flex:0.5,
    backgroundColor: 'purple'
},

body2:{
    flex:0.5,
    backgroundColor: 'pink',
      borderRadius:20
  
},
body7:{
    flex:0.8,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent: 'space-around'
},
body12:{
flex:0.3,
backgroundColor: 'white',
flexDirection: 'column',
justifyContent:'space-around'
},
body13:
{
flex:0.3,
backgroundColor:'olive',

},

body27:
{
flex:0.5,
backgroundColor:'blue',
borderRadius:100,
alignContent: 'center'


},
body14:
{
flex:0.3,
backgroundColor:'blue',

},

body16:{
flex:0.3,
backgroundColor: 'white',
flexDirection: 'column',
justifyContent:'space-around'
},
body17:
{
flex:1,
backgroundColor:'yellow',
justifyContent :'space-around'

},
// body18:
// {
// flex:0.3,
// backgroundColor:'olive',

// },

body20:{
flex:0.3,
backgroundColor: 'white',
flexDirection: 'column',
justifyContent:'space-around'
},
body21:
{
flex:0.3,
backgroundColor:'orange',

},
body22:
{
flex:0.3,
backgroundColor:'pink',
  borderRadius:60


},

body8:{
    flex:0.7,
    backgroundColor: 'white',
    flexDirection: 'row'
    
},
body25:{
    flex:0.33,


},
body23:{
    flex:0.33,
    flexDirection:'column'

},
body24:{
    flex:0.33,
   
    
    alignContent:'center'
    

},
body26:{
    flex:0.33,
    backgroundColor: 'orange',
      borderRadius:20,
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center'
    

},


body9:{
    flex:0.3,
    flexDirection: 'row',
    justifyContent: 'center',
},
body10:{
    flex:0.5,
    backgroundColor: 'pink',
    flexDirection:'column'
    
},
body11:{
    flex:0.5,
    backgroundColor: 'white'
}
})
export default Task7;