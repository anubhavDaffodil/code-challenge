import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 10
	},
	matchEventContainer: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.type
	},
	labelCenterText: {
		marginLeft: 20,
		marginRight: 20,
		color: colors.calm,
		textAlign: 'center'
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