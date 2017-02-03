import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	matchName: {
		fontSize: 15,
		color: colors.royal,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	info: {
		fontWeight: 'bold',
		color: colors.dark
	},
	horizontalContainer: {
		flexDirection: 'row'
	},
	horizontalItemContainer: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 5
	}
});