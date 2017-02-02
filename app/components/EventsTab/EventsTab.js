import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

const EventsTab = props => {
	return (
		<ScrollView>
			<View style={styles.container}>
				{
					props.events.map((e, i) => <Text key={i} style={styles.eventLabel}>{e.label}</Text>)
				}
			</View>
		</ScrollView>
	);
}

EventsTab.propTypes = {
	events: React.PropTypes.array
};

export default EventsTab;