import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {startTransition} from 'react';
import {Card} from 'react-native-paper';

export const Task = props => {
  return (
    <Card style={styles.cardElement}>
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.square}></View>
          <Text style={styles.content}>{props.text}</Text>
        </View>
        <View style={styles.circle}></View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardElement: {
    opacity: 2,
    elevation: 5,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    borderColor: '#0000cd',
    borderWidth: 2,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },
  square: {
    backgroundColor: '#00ced1',
    height: 25,
    width: 25,
    borderRadius: 5,
  },
  content: {
    marginLeft: 15,
    fontSize: 17,
    fontWeight: '600',
    width: '80%',
    flexWrap: 'wrap',
    color: 'black',
  },
  circle: {
    height: 20,
    width: 20,
    backgroundColor: '#b0e0e6',
    borderWidth: 2,
    borderColor: '#b0e0e6',
    marginRight: 16,
    borderRadius: 10,
  },
});
