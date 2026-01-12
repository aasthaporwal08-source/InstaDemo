import { StatusBar,StyleSheet, useColorScheme,View , Image,useWindowDimensions} from "react-native";
import { Button, Icon, TextInput, Text,Card, Cover,Avatar } from "react-native-paper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';


const Profile = () => {
    return(
      <SafeAreaView style={{flex:1}}>
        <View style= {styles.container}> 
          <View style = {styles.nameBox}>
            <View style = {styles.picture}>
               
              <Avatar.Image size={84} source={require('./assets/Burger_Logo.jpg')} />
            </View>
            <View style = {styles.info}>
              <View style = {styles.fullName}>
               <Text variant="titleMedium">Aastha Rishabh Gupta</Text>
                  </View>
              <View style ={styles.data}>
                <View style = {styles.postNo}>
                  <Text variant="titleMedium">{'24\nposts  '
                    }</Text>
                </View>
                <View style = {styles.followersNo}>
                  <Text variant="titleMedium">{'1M\nfollowers'
                    }</Text>
                </View>
                <View style = {styles.followingNo}>
                  <Text variant="titleMedium">{'2\nfollowing  '
                    }</Text>
                </View>
              </View>
            </View>
          </View>
          <View style = {styles.bio}>
            <Text variant="titleMedium">{'Reel Creator\nTwo engineers 💑\nhello\nwe love creating ❤️  '
                    }</Text>
          </View>
          <View style = {styles.profDashboard}>
             <Button style = {styles.button} mode="contained" buttonColor="lightgray" onPress={() => console.log('Pressed')}>Professional Dashboard</Button>
          </View>
          <View style = {styles.buttons}>
          <View style= {styles.edit}>
            <Button style = {styles.button} mode="contained" buttonColor="lightgray" onPress={() => console.log('Pressed')}>Edit profile</Button>
          </View>
           <View style= {styles.shareProfile}>
            <Button style = {styles.button} mode="contained" buttonColor="lightgray" onPress={() => console.log('Pressed')}>Share profile</Button>
           </View>
          </View>
          <View style= {styles.icons}>
            <Button style = {styles.button} mode="contained"  buttonColor="lightgray" onPress={() => console.log('Pressed')}>Icons</Button>
          
          </View>
          <View style= {styles.images}>
            <View style = {styles.image1}></View>
            <View style = {styles.image2}></View>
            <View style = {styles.image3}></View>
          </View>
          <View style= {styles.images}>
            <View style = {styles.image1}>
              <Image resizeMode="contain"  source={require('./assets/image1.png')}></Image>
            </View>
            <View style = {styles.image2}>
              <Image  source={require('./assets/image2.png')}></Image>
            </View>
            <View style = {styles.image3}>
              <Image  source={require('./assets/image3.png')}></Image>
            </View>
          </View>
          <View style= {styles.images}>
            <View style = {styles.image1}></View>
            <View style = {styles.image2}></View>
            <View style = {styles.image3}></View>
          </View>
         </View>
         </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
         flex: 1
    },

    nameBox: {
        flex:0.1,
        flexDirection: 'row',
        // backgroundColor: 'pink'
    },
    picture:{
     flex: 0.3,
      //backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center'

    },
    info:{
      flex: 0.7,
      flexDirection: 'column',
       //backgroundColor: 'blue'
    },
    fullName: {
      flex: 0.3,
      //backgroundColor: 'blue',
      flexDirection: 'row',
      justifyContent:'flex-start',
      
    },
    data:{
         flex: 0.8,
      //backgroundColor: 'green',
      flexDirection: 'row' 
    },
    postNo:{
      flex: 0.33,
      //backgroundColor: 'olive'
    },
     followersNo:{
      flex: 0.33,
      //backgroundColor: 'red'
    }
,
    followingNo:{
      flex: 0.33,
      //backgroundColor: 'olive'
    },
    bio: {
      flex:0.15,
      //backgroundColor: 'black'
      marginInlineStart:20
    },
    profDashboard:{
      flex: 0.07
    },
    buttons:{
      flex: 0.07,
      flexDirection: 'row',
      
    },
    edit:{
      flex:0.5,
      
    },
     shareProfile:{
      flex:0.5,
      
    },
    icons:{
      flex:0.05,
     
    },
    images:{
      flex:0.2,
      backgroundColor:'olive',
      flexDirection: 'row'
    },
    image1:{
      flex:0.33,
      backgroundColor: 'pink'
    },
    image2:{
      flex:0.33,
      backgroundColor: 'lightblue'
    },
    image3:{
      flex:0.33,
      backgroundColor: 'purple'
    },
    button:{
      borderRadius:10,
      marginLeft:1,
      
    }



    }
    
)

export default Profile;