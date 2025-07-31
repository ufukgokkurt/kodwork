import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import JobItem from '../components/JobItem';
 



export default function FavoriteJob() {
  const jobList = useSelector((state: RootState) => state.favorite.jobs)

  return (
      <SafeAreaView style={styles.container}>
      {jobList.length === 0 ? (
        <Text style={styles.emptyText}>No favorite jobs</Text>
      ) : (
        <FlatList
          data={jobList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <JobItem job={item} favorite={true} />}
        />
      )}
    </SafeAreaView>
 
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    padding: 5,
  },
   emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});