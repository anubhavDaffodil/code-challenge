import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const LeagueTab = props => {
	return (
		<View style={styles.container}>
			<Text>League</Text>
		</View>
	);
}

LeagueTab.propTypes = {
	details: React.PropTypes.object
};

export default LeagueTab;