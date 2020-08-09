
import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    contactCard: {
        padding: metrics.basePadding,
        backgroundColor: colors.white,
        borderRadius: metrics.baseRadius,
    },
    container: {
        flex: 1,
        padding: metrics.basePadding,
        backgroundColor: colors.lighter,
    },
    image: {
        width: 200,
        height: 200,
    },
    info: {
        marginTop: metrics.baseMargin,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        color: colors.darker,
        fontWeight: 'bold',
    },
   
    street: {
        fontSize: 12,
        color: colors.darker,
        marginTop: 2
    },
    country: {
        fontSize: 10,
        color: colors.darker,
        marginTop: 2
    },
    phone: {
        fontSize: 16,
        color: colors.darker,
        marginTop: 6,
    },
    email: {
        fontSize: 14,
        color: colors.gray,
        marginTop: 2,
    },
  })

export default styles;