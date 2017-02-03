import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	header: {
	},
	body: {
		flex: 1,
		marginTop: 10
	},
	subHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	location: {
		flexDirection: 'row',
		alignItems: 'center',
	}
});