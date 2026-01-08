import { StatusBar, StyleSheet, useColorScheme ,View, Text} from 'react-native';

const Task6 = ()=>{
    return(<View style= {styles.container}>
        <View style = {styles.body1}>
            <View style= {styles.body2}></View>
        </View>
        <View style={styles.body3}>
            <View style={styles.body6}></View>
            <View style={styles.body7}>
                <View style={styles.body10}></View>
            </View>
            <View style={styles.body8}>
                <View style= {styles.body11}></View>
            </View>
            <View style={styles.body9}></View>
        </View>
        <View style= {styles.body4}>
            <View style= {styles.body5}></View>
        </View>
    </View>

    )
}
const styles= StyleSheet.create({
    container : {
        flexDirection: 'column',
        flex:1
    },
    body1:{
        flex:0.3,
        backgroundColor: 'black',
        flexDirection:'row'
    },
    body2:{
        flex:0.5,
        backgroundColor:'gray'
    },
    body3:{
        flexDirection: 'row',
        flex:0.3,
        backgroundColor:'brown'
    },
    body4:{
        flex:0.4,
        flexDirection:'row',
        
        backgroundColor: 'silver'
    },
    body5:{
        flex: 0.5,
        backgroundColor: 'pink'
    },
    body6:{
        flex:0.2,
        backgroundColor:'white'
    },
     body7:{
        flexDirection:'column',
        flex:0.4,
        backgroundColor:'green'
    },
     body8:{
        flex:0.2,
        backgroundColor:'blue'
    },
     body9:{
        flex:0.2,
        backgroundColor:'red'
    },
     body10:{
        flex:0.3,
        backgroundColor:'red'
    },
    body11:{
        flex:0.7,
        backgroundColor:'orange'
    }



    

})
export default Task6;