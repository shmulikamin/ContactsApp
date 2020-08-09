import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lighter,
    },
    flatListStyle: {
        padding: metrics.basePadding,
    },
    contentContainerStyle: {
        justifyContent: 'space-between',
    },
    contactItem:{
        width: (metrics.screenWidth - 50) /2 ,
        marginTop: metrics.baseMargin,
        padding: metrics.baseMargin,
        backgroundColor: colors.lighter,
        borderRadius: metrics.baseRadius,
    },
    image: {
        resizeMode: 'contain',
        height: 180,
    },
    name:{
        marginTop: metrics.baseMargin,
        fontSize: 16,
        color: colors.darker,
        fontWeight: 'bold',
    },
})
export default styles;