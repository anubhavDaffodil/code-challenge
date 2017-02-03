import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	body: {
		padding: 10,
		marginTop: 10,
		backgroundColor: colors.stable,
		alignItems: 'center'
	},
	subHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	location: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	competitionLogo: {
		height: 100,
		width: 100,
		resizeMode: 'contain'
	}
});