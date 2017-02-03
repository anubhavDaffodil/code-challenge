import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 5,
		marginTop: 5,
		alignItems: 'center',
		backgroundColor: colors.stable
	},
	subContainer: {
		alignItems: 'flex-end',
		marginRight: 15
	},
	shootoutsContainer: {
		flexDirection: 'row',
		marginTop: 5
	}
});