import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const EventsTab = props => {
	return (
		<View style={styles.container}>
			<Text>Events</Text>
		</View>
	);
}

EventsTab.propTypes = {
	events: React.PropTypes.object
};

export default EventsTab;