import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

export default StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		flex: 1,
		backgroundColor: colors.royal,
		justifyContent: 'center',
		alignItems: 'center'
	},
	matchName: {
		margin: 20,
		fontWeight: 'bold',
		fontSize: 16,
		textAlign: 'center',
		color: colors.lightish
	},
	teams: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: colors.darkish
	},
	scoreContainer: {},
	score: {
		fontSize: 30,
		color: colors.royal,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	halfscore: {
		fontSize: 15,
		color: colors.dark,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	body: {
		flex: 2,
		backgroundColor: colors.darkish
	},
	tabBarUnderlineStyle: {
		backgroundColor: colors.royal
	}
});
