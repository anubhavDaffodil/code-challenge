import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		margin: 10
	},
	labelLeftText: {
		flex: 1,
		color: colors.type,
		textAlign: 'right'
	},
	labelRightText: {
		flex: 1,
		color: colors.type,
		textAlign: 'left'
	},
	labelContainer: {
		flex: 3,
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