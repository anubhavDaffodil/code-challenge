import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: colors.lightish,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		margin: 10
	},
	name: {
		textAlign: 'center'
	}
});