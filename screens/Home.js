import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Task} from '../components/Task';

export const Home = () => {
  const [content, setContent] = useState([]);
  const [data, setData] = useState('');

  const handleTextChange = () => {
    // setContent([...content, data]);
    content.push(data);
    setData(null);
    console.log(data);
  };

  const deleteItem = index => {
    let itemList = [...content];
    itemList.splice(index, 1);
    setContent(itemList);
  };
  return (
    <View style={styles.conatiner}>
      <View style={{marginLeft: 20, paddingTop: 30}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          TODO LIST
        </Text>
      </View>
      <View>
        {content.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => deleteItem(index)}>
              <Task text={item} />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.textContainer}>
        <TextInput
          label="Task"
          mode="outlined"
          value={data}
          style={styles.textItem}
          onChangeText={text => {
            setData(text);
          }}
        />
        <TouchableOpacity onPress={() => handleTextChange()}>
          <View style={styles.addButton}>
            <Text style={styles.addIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    width: '100%',
    bottom: 20,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  textItem: {
    width: '70%',
    height: 40,
    borderRadius: 20,
  },
  addButton: {
    height: 45,
    width: 45,
    borderRadius: 25,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 30,
  },
});
