import React from 'react';
import { View, Navigator, StatusBar, Platform } from 'react-native';
import Routes from '../../config/routes';
import styles from './styles';
import { colors } from '../../config/styles';

const HomeLayout = () => {
	const route = Routes.getMatchDetailRoute();
	return (
		<View style={styles.container}>
			<StatusBar
				backgroundColor={colors.royal}
				barStyle="light-content"
				hidden={Platform.OS === 'ios' ? true : false}
				/>
			<Navigator
				{...route}
				style={{ flex: 1 }}
				>
			</Navigator>
		</View>
	);
}

export default HomeLayout;