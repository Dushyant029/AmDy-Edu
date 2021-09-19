import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import ProgressCircle from 'react-native-progress-circle'

export default class Details extends React.Component{
    render(){
        const {title,num, duration, percent, color, onPress} = this.props
        return(
           <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection:"row",
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                }}
           >
               <View style={{
                   backgroundColor:color,
                   paddingVertical:5,
                   paddingHorizontal:10,
                   borderRadius:6
               }}>
                   <Text style={{
                       fontSize:13,
                       fontFamily:"Poppins-Bold"
                   }}>{num}</Text>
               </View>
               <View>
                   <Text style={{
                       color:"#345c74",
                       fontFamily:"Poppins-Bold",
                       fontSize:13,
                       paddingLeft:20,
                       width:180
                   }}>
                       {title}
                   </Text>
                   <Text style={{
                       color:"#4c4ef9",
                       fontSize:12,
                       fontFamily:"Inter-BoldItalic",
                       paddingLeft:20
                   }}>
                       {duration}
                   </Text>
               </View>
               <Text style={{
                   color:"#345c74",
                   fontFamily:"Inter-BoldItalic",
                   fontSize:13,
                   width:50
               }}>
                   {percent}%
               </Text>

               <ProgressCircle
                    percent={percent}
                    radius={17}
                    borderWidth={1.5}
                    color="#4c4ef9"
                    shadowColor="#FFF"
                    bgColor="#f0f0fc"
               >
                   <Image
                        source={require('../../../../assets/images/pl.png')}
                   />
               </ProgressCircle>
           </TouchableOpacity>
        )
    }
}