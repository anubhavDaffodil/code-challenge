import React from 'react';
import { View, Navigator, StatusBar } from 'react-native';
import Routes from '../../config/routes';
import styles from './styles';
import { colors } from '../../config/styles';

export default HomeLayout = props => {
	const route = Routes.getMatchDetailRoute();
	return (
		<View style={styles.container}>
			<StatusBar
				backgroundColor={colors.royal}
				barStyle="light-content"
				/>
			<Navigator
				{...route}
				style={{ flex: 1 }}
				>
			</Navigator>
		</View>
	);
}