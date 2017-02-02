import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		margin: 10
	},
	labelText: {
		color: colors.type
	},
	labelLeft: {
		flex: 3,
		justifyContent: 'flex-end',
		alignItems: 'center',
		flexDirection: 'row'
	},
	labelRight: {
		flex: 3,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row'
	},
	iconContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	iconSubContainer: {
		width: 18,
		height: 20
	}
});