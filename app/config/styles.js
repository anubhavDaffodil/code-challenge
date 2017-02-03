import { StyleSheet } from 'react-native';

const colors = {
    royal: '#453352',
    calm: '#06cbc4',
    type: '#182222',
    stable: '#f1f1f1',
    lightish: '#f8f8f8',
    dark: '#858585',
    darkish: '#dddddd',
};

const styles = StyleSheet.create({
    info: {
        fontWeight: 'bold',
        color: colors.dark
    },
    headerText: {
        fontSize: 25,
        color: colors.royal,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    headerText1: {
        fontSize: 20,
        color: colors.royal,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subHeaderText: {
        color: colors.dark,
        fontSize: 15,
        fontWeight: 'bold'
    },
    highlightValue: {
        color: colors.royal,
        fontWeight: 'bold',
        fontSize: 18
    },
    highlight1: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.type
    },
    highlight2: {
        fontWeight: 'bold',
        color: colors.dark,
        fontSize: 15
    },
    labelText: {
        color: colors.type,
        fontWeight: 'bold'
    },
    labelAdditionalText: {
        color: colors.dark,
        fontWeight: 'bold'
    }
});

colors.positive = colors.calm;
export { colors };
export default styles;