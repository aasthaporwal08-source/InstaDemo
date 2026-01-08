import { StatusBar, StyleSheet, useColorScheme, View,Text } from 'react-native';

 const Task1 = () => {
    return( <View style={styles.container}>
        {/* task 1 */}
        <View style={styles.body1}>
           <Text>Hello</Text>
        </View>
        <View style={styles.body2}>
          <Text>Aastha</Text>

        </View>
         <View style={styles.body3}>

          <Text>Porwal</Text>
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
    flex:0.34,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center'

  },
   body2:{
    flex:0.33,
    backgroundColor:'yellow',
        justifyContent:'center',
         alignItems:'center'
  },
  body3:{
    flex:0.34,
    backgroundColor: 'pink',
    justifyContent:'center',
         alignItems:'center'
  },
  body4:{
   flexDirection: 'row',
   flex:0.33
  }

});

export default Task1 