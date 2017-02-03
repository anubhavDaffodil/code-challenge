import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const SummaryTab = props => {
	return (
		<View style={styles.container}>
			<Text>Summary</Text>
		</View>
	);
}

SummaryTab.propTypes = {
	matchDetails: React.PropTypes.object.isRequired
};

export default SummaryTab;