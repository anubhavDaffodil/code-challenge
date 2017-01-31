import React from 'react';
import { Navigator } from 'react-native';
import Routes from '../../config/routes';

export default HomeLayout = props => {
	const route = Routes.getMatchDetailRoute();
	return (
		<Navigator
			{...route}
			style={{ flex: 1 }}
			/>
	);
}