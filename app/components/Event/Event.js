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
			<View style={styles.labelLeft}>
				<Text style={styles.labelText}>{props.event.label}</Text>
			</View>
			<View style={styles.iconContainer}>
				<View style={styles.iconSubContainer}>
					<Icon name={getIconName(props.event.category, props.event.value)} width="60" height="60" />
				</View>
			</View>
			<View style={styles.labelRight}>
				<Text style={styles.labelText}>{props.event.label}</Text>
			</View>
		</View>
	);
}

Event.propTypes = {
	event: React.PropTypes.object
};

export default Event;