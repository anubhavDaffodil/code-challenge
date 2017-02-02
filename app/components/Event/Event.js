import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Icon from '../Icon';

function getIconName(category, value) {
	switch (category) {
		case 'period_change':
			return 'Whistle';
		case 'goal':
			return value;				// Assuming value will be either Goal or OwnGoal
		case 'substitution_off':
		case 'substitution_on':
			return 'Substitution';
		case 'booking':
			return `${value}Card`;		// Assuming value will be 'Yellow', 'Red', or 'SecondYellow'
		case 'penaltyshot':
			return `Penalty${value}`	// Assuming value will be 'Scored', 'Saved', or 'Missed'
		default:
			return value;
	}
}

const Event = props => {
	return (
		<View style={styles.container}>
			<Icon name={getIconName(props.event.category, props.event.value)} />
			<Text style={styles.eventLabel}>{props.event.label}</Text>
		</View>
	);
}

Event.propTypes = {
	event: React.PropTypes.object
};

export default Event;