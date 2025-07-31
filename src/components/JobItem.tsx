import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Job } from '../Utils';
import { useNavigation } from '@react-navigation/native';

 

type JobItemProps = {
  job:Job;
};

export default function JobItem({job}:JobItemProps) {
    const navigation= useNavigation();
  return (
    <TouchableOpacity style={styles.panel} onPress={()=>navigation.navigate('Details',{id:job.id})}>
      <Text style={styles.title}>{job.name}</Text>
      <Text style={styles.company}>{job.company.name}</Text>
       <Text style={styles.location}>{job.locations[0].name}</Text>
        <Text style={styles.levels}>{job.levels[0].name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    panel:{
        backgroundColor:'white',
        margin:10,
        padding:10,
        borderColor:'#333',
        borderWidth:1,
        borderRadius:10

    },
    title: {
        fontSize:16,
        fontWeight:'bold',
        marginBottom:5
    },
    company: {

    },
    location: {
        backgroundColor:'red',
        paddingHorizontal:10,
        paddingVertical:5,
        color:'white',
        fontSize:16,
        fontWeight:'800',
        borderRadius:10,
        marginTop:10,
        width:'auto',
        alignSelf:'flex-start'

    },
    levels: {
        color:'red',
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'flex-end'

    }
})