import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 5,
		backgroundColor: colors.stable,
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 5
	},
	matchEventContainer: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.type,
		marginBottom: 5
	},
	labelCenterText: {
		marginLeft: 20,
		marginRight: 20,
		color: colors.calm,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	labelText: {
		flex: 1,
		color: colors.type,
		fontWeight: 'bold'
	},
	labelAdditionalText: {
		flex: 1,
		color: colors.dark,
		fontWeight: 'bold'
	},
	labelLeftText: {
		textAlign: 'right'
	},
	labelRightText: {
		textAlign: 'left'
	},
	labelLeftAdditionalText: {
		textAlign: 'right'
	},
	labelRightAdditionalText: {
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