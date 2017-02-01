import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkish,
	},
	header: {
		flex: 1,
		backgroundColor: colors.royal,
		justifyContent: 'center',
		alignItems: 'center'
	},
	body: {
		flex: 2,
		backgroundColor: colors.dark
	},
	teams: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: colors.darkish
	},
	text: {
		fontSize: 10,
		textAlign: 'center',
		color: colors.type,
	},
	score: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	name: {
		margin: 10,
		fontSize: 20,
		textAlign: 'center',
		color: colors.lightish
	}
});
