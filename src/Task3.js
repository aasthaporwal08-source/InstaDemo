import { StatusBar,StyleSheet,useColorScheme,View,Text } from "react-native";

const Task3 = () => {
    return(
        <View style = {styles.container}>
            <View style= {styles.body1}>
                <View style = {styles.body2}></View>
                <View style = {styles.body3}></View>
            </View>
            <View style= {styles.body4}>
                <View style = {styles.body5}></View>
                <View style = {styles.body6}></View>
            </View>
            <View style= {styles.body7}>
                <View style = {styles.body8}></View>
                <View style = {styles.body9}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
 container:{
    flex:1,
    flexDirection: 'column',
    // gap:10,
    // rowGap:20,
    columnGap:50
 },
 body1:
 {
    flexDirection: 'row',
    flex: 0.33,
    backgroundColor:'pink'
 },
 body2:{
   flex:0.33,
   backgroundColor:'red'
 },
  body3:{
   flex:0.33,
   backgroundColor:'purple'
 },
 body4:
 {
    flexDirection: 'row',
    flex: 0.33,
    backgroundColor:'green'
 },
 body5:{
   flex:0.33,
   backgroundColor:'black'
 },
  body6:{
   flex:0.33,
   backgroundColor:'white'
 },
 body7:
 {
    flexDirection: 'row',
    flex: 0.33,
    backgroundColor:'orange'
 },
 body8:{
   flex:0.33,
   backgroundColor:'brown'
 },
  body9:{
   flex:0.33,
   backgroundColor:'yellow'
 }
})
export default Task3;