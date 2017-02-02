import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	header: {
	},
	body: {
		flex: 1,
		marginTop: 10
	},
	headerText: {
		fontSize: 25,
		color: colors.royal,
		fontWeight: 'bold',
	},
	subHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	subHeaderText: {
		color: colors.dark,
		fontSize: 15,
		fontWeight: 'bold'
	},
	info: {
		fontWeight: 'bold',
		color: colors.dark
	},
	location: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	city: {
		fontWeight: 'bold',
		fontSize: 20,
		color: colors.type
	},
	venue: {
		fontWeight: 'bold',
		color: colors.dark,
		fontSize: 15
	}
});