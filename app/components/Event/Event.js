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
		case 'substitution_on':
			return 'SubstitutionOn';
		case 'substitution_off':
			return 'SubstitutionOff';
		case 'booking':
			return `${value}Card`;		// Assuming value will be 'Yellow', 'Red', or 'SecondYellow'
		case 'penaltyshot':
			return `Penalty${value}`	// Assuming value will be 'Scored', 'Saved', or 'Missed'
		default:
			return value;
	}
}

const Event = props => {
	let leftEventLabel;
	let rightEventLabel;

	if (props.event.side === 'both')
		return (
			<View style={styles.matchEventContainer}>
				<View style={styles.iconSubContainer}>
					<Icon fill={colors.calm} name={getIconName(props.event.category, props.event.value)} width="60" height="60" />
				</View>
				<Text style={styles.labelCenterText}>{`${props.event.label} (${props.event.time}')`}</Text>
				<View style={styles.iconSubContainer}>
					<Icon fill={colors.calm} name={getIconName(props.event.category, props.event.value)} width="60" height="60" />
				</View>
			</View>
		);

	if (props.event.side === 'home') {
		if (props.homeOnLeft) {
			leftEventLabel = <Text style={styles.labelLeftText}>{`(${props.event.time}') ${props.event.label}`}</Text>;
			if (props.event.additionalInfo)
				rightEventLabel = <Text style={styles.labelRighAdditionaltText}>{`${props.event.additionalInfo}`}</Text>;
		}
		else {
			rightEventLabel = <Text style={styles.labelRightText}>{`${props.event.label} (${props.event.time}')`}</Text>;
			if (props.event.additionalInfo)
				leftEventLabel = <Text style={styles.labelLeftAdditionalText}>{`${props.event.additionalInfo}`}</Text>;
		}
	}
	else if (props.event.side === 'away') {
		if (!props.homeOnLeft) {
			leftEventLabel = <Text style={styles.labelLeftText}>{`(${props.event.time}') ${props.event.label}`}</Text>;
			if (props.event.additionalInfo)
				rightEventLabel = <Text style={styles.labelRighAdditionaltText}>{`${props.event.additionalInfo}`}</Text>;
		}
		else {
			rightEventLabel = <Text style={styles.labelRightText}>{`${props.event.label} (${props.event.time}')`}</Text>;
			if (props.event.additionalInfo)
				leftEventLabel = <Text style={styles.labelLeftAdditionalText}>{`${props.event.additionalInfo}`}</Text>;
		}
	}
	return (
		<View style={styles.container}>
			<View style={styles.labelContainer}>
				{leftEventLabel}
			</View>
			<View style={styles.iconContainer}>
				<View style={styles.iconSubContainer}>
					<Icon fill={colors.type} name={getIconName(props.event.category, props.event.value)} width="60" height="60" />
				</View>
			</View>
			<View style={styles.labelContainer}>
				{rightEventLabel}
			</View>
		</View>
	);
}

Event.propTypes = {
	event: React.PropTypes.object
};

export default Event;