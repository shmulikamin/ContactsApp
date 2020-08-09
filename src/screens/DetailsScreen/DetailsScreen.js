import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export const DetailsScreen = ({ route }) => {
    const { item } = route.params;
    const { location } = item;
    const { street } = location;

    return(
        <View style={styles.container}>
            <View style={styles.contactCard}>
                <View style={styles.info}>
                <Image style={styles.image} source={{ uri: item.picture.large}} />
                    <Text testID="name" style={styles.name}>{`${item.name.last} ${item.name.first}`}</Text>
                    <Text testID="streetName" style={styles.street}>{`${street.name} ${street.number}`}</Text>
                    <Text style={styles.country}>{ `${location.city} ${location.country}`}</Text>
                    <Text style={styles.phone}>{item.phone}</Text>
                    <Text style={styles.email}>{item.email}</Text>
                </View>
            </View>
        </View>

    )
   
} 

