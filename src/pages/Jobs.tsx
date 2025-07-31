import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, Job } from '../Utils';
import JobItem from '../components/JobItem';

export default function Jobs() {
  const [jobList, setJobList] = useState<Job[]>([]);

  const [indicator,setIndicator] =useState(false);

  useEffect(() => {
    setIndicator(true);
    axios
      .get(API_URL + '?page=0')
      .then(response => {
        setJobList(response.data.results);
        setIndicator(false);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {indicator ? <ActivityIndicator   size="large"/> : <FlatList data={jobList} renderItem={({item}) =><JobItem job={item} favorite={false} /> } />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
});
