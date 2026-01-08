import { StatusBar, StyleSheet, useColorScheme, View,Text } from 'react-native';



 const Task2 = () => {
    return( <View style={styles.container}>
        {/* task 1 */}
        <View style={styles.body1}>
           <View style= {{ flex:0.5,backgroundColor:'red'}}></View>
        </View>
        <View style={styles.body2}>

           <View style= {{ flex:0.3,backgroundColor:'white'}}></View>

        </View>
         <View style={styles.body3}>
            <View style= {{ flex:0.33,backgroundColor:'orange'}}></View>
            <View style= {{ flex:0.33,backgroundColor:'white'}}></View>
         </View>
      </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  
    //backgroundColor:'red'
  },
  body1:{
    flexDirection:'row',
    flex:0.34,
    backgroundColor:'green',

    // justifyContent:'center',
    // alignItems:'center'

  },
   body2:{
    flexDirection:'row',
    flex:0.33,
    backgroundColor:'yellow'
  },
  body3:{
    flexDirection:'row',
    flex:0.34,
    backgroundColor: 'pink'
  },
  body4:{
   flexDirection: 'row',
   flex:0.33
  },
  leftColumn:{
    flex:.5,
    backgroundColor: 'blue'
  }

});

export default Task2