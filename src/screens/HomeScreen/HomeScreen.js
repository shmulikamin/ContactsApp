import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { getRandomUsers } from '../../services/ContactsServices';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


export const HomeScreen = () => {
    const [users, setUsers] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
      async function fetchData() {
        const response = await getRandomUsers(10);
        setUsers(response)
      }
      fetchData();
    }, []);

    const Item = ({ item, onPress }) => {
        const { location } = item;
        return(
            <TouchableOpacity onPress={onPress} style={styles.contactItem}>
                <View style={styles.container}>
                    <View style={styles.productCard}>
                        <View style={styles.info}>
                        <Image style={styles.image} source={{ uri: item.picture.large}} />
                            <Text style={styles.name}>{`${item.name.last} ${item.name.first}`}</Text>
                            <Text style={styles.country}>{ `${location.city} ${location.country}`}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => navigation.navigate("Details", { item })}
            />
        );
      };

    return(
        <View style={styles.container}>
            <FlatList style={styles.flatListStyle}
                data={users}
                contentContainerStyle={styles.contentContainerStyle}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />
        </View>
    )
} 
