import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import Event from '../Event';

const EventsTab = props => {
	return (
		<ScrollView>
			<View style={styles.container}>
				{
					props.events.map((e, i) => <Event key={i} event={e} />)
				}
			</View>
		</ScrollView>
	);
}

EventsTab.propTypes = {
	events: React.PropTypes.array
};

export default EventsTab;