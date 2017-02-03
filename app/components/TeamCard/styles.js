import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5
	},
	logoContainer: {
		flexDirection: 'row'
	},
	sideIcon: {
		position: 'absolute',
		top: -10
	},
	sideIconLeft: {
		left: 0
	},
	sideIconRight: {
		right: 0
	},
	logo: {
		height: 75,
		width: 75,
		resizeMode: 'contain'
	}
});