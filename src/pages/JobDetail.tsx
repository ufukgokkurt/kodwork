import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { API_URL, Job } from '../Utils';
import axios from 'axios';
import RenderHTML from 'react-native-render-html';
 

export default function JobDetail({ route }) {
  const { width } = useWindowDimensions();

  const { id } = route.params;

  const [job, setJob] = useState<Job>();

  const [indicator, setIndicator] = useState(false);
  useEffect(() => {
    setIndicator(true);
    axios
      .get(API_URL + '/' + id)
      .then(response => {
        setJob(response.data);
        setIndicator(false);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <ScrollView style={styles.container}>
      {indicator ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <Text style={styles.title}>{job?.name}</Text>
          <View style={{ height: 5 }} />
          <Text style={styles.red}>
            Locations:{' '}
            <Text style={styles.black}>{job?.locations[0].name}</Text>
          </Text>
          <View style={{ height: 5 }} />

          <Text style={styles.red}>
            Job Level: <Text style={styles.black}>{job?.levels[0].name}</Text>
          </Text>
          <View style={{ height: 5 }} />

          <Text style={[styles.title, { alignSelf: 'center' }]}>
            Job Detail
          </Text>
          <View style={styles.content}>
            <RenderHTML contentWidth={width} source={{ html: job?.contents }} />
          </View>
          <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.btn}>
         <Text style={styles.btnText}>Send</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn}>
         <Text style={styles.btnText}>Add Favorite</Text>
      </TouchableOpacity>
    </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    padding: 5,
  },
  title: {
    color: '#37474F',
    fontSize: 24,
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
    fontSize: 18,
  },
  black: {
    color: 'black',
  },
  content: {
    backgroundColor: 'white',
  },
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    gap: 10,
    paddingBottom:20
  },
  btn: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
  icon: {
    marginRight: 4,
  },
});
