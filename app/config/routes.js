import React from 'react';
import MatchDetail from '../routes/MatchDetail';

export default {
	getMatchDetailRoute() {
		return {
			renderScene(route, navigator) {
				return <MatchDetail navigator={navigator} />;
			}
		};
	}
};