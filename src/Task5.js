import { StatusBar, StyleSheet, useColorScheme, View,Text } from 'react-native';



 const Task5 = () => {
    return( <View style={styles.container}>
        {/* task 1 */}
        <View style={styles.body1}>
           {/* <View style= {{ flex:0.5,backgroundColor:'red'}}></View> */}
        </View>
        <View style={styles.body2}>
            <View style = {styles.body3}></View>
            <View style = {styles.body4}></View>
            <View style = {styles.body5}>
                <View style= {styles.body6}></View>
                <View style= {styles.body7}>
                    <View style= {styles.body8}></View>
                     <View style= {styles.body9}></View>
                </View>
            </View>


        </View>
        
      </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
  
    //backgroundColor:'red'
  },
  body1:{
   
    flex:0.3,
    backgroundColor:'green',

    // justifyContent:'center',
    // alignItems:'center'

  },
   body2:{
    flexDirection:'column',
    flex:0.7,
    backgroundColor:'yellow'
  },
  body3:{
    flex:0.3,
    backgroundColor:'red'
  },
  body4:{
    flex:0.3,
    backgroundColor:'purple'
  },
 body5:{
    flexDirection:'row',
    flex:0.4,
    backgroundColor:'gold'
  },
   body6:{
    flex:0.4,
    backgroundColor:'pink'
  },
  body7:{
    flexDirection:'column',
    flex:0.6,
    backgroundColor:'silver'
  },
  body8:{
    flex:0.3,
    backgroundColor:'blue'
  },
  body9:{
    flex:0.3,
    backgroundColor:'brown'
  }

});

export default Task5