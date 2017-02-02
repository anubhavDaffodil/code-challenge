import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import { colors } from '../../config/styles';

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
	if (props.event.side === 'both')
		return (
			<View style={styles.matchEventContainer}>
				<View style={styles.iconSubContainer}>
					<Icon fill={colors.calm} name={getIconName(props.event.category, props.event.value)} width="60" height="60" />
				</View>
				<Text style={styles.labelCenterText}>{props.event.label}</Text>
				<View style={styles.iconSubContainer}>
					<Icon fill={colors.calm} name={getIconName(props.event.category, props.event.value)} width="60" height="60" />
				</View>
			</View>
		);

	const homeEventLabel = props.event.side === 'home' ? props.event.label : null;
	const awayEventLabel = props.event.side === 'away' ? props.event.label : null;
	return (
		<View style={styles.container}>
			<View style={styles.labelContainer}>
				<Text style={styles.labelLeftText}>{props.homeOnLeft ? homeEventLabel : awayEventLabel}</Text>
			</View>
			<View style={styles.iconContainer}>
				<View style={styles.iconSubContainer}>
					<Icon fill={colors.type} name={getIconName(props.event.category, props.event.value)} width="60" height="60" />
				</View>
			</View>
			<View style={styles.labelContainer}>
				<Text style={styles.labelRightText}>{!props.homeOnLeft ? homeEventLabel : awayEventLabel}</Text>
			</View>
		</View>
	);
}

Event.propTypes = {
	event: React.PropTypes.object
};

export default Event;