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
	subHeader: {
		color: colors.type,
		fontWeight: 'bold'
	},
	teamName: {
		textAlign: 'center',
		color: colors.dark,
		fontWeight: 'bold'
	},
	logoContainer: {
		flexDirection: 'row'
	},
	sideIconLeft: {
		position: 'absolute',
		left: -10,
		top: -10
	},
	sideIconRight: {
		position: 'absolute',
		right: -10,
		top: -10
	},
	logo: {
		height: 75,
		width: 75,
		resizeMode: 'contain'
	},
	shootoutsContainer: {
		flexDirection: 'row',
		marginTop: 5
	}
});