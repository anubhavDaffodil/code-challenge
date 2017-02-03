import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import { colors } from '../../config/styles';

const Event = props => {
	let leftEventLabel;
	let rightEventLabel;

	if (props.event.side === 'both')
		return (
			<View style={styles.matchEventContainer}>
				<Icon fill={colors.calm} category={props.event.category} value={props.event.value} width="60" height="60" />
				<Text style={styles.labelCenterText}>{`${props.event.label} (${props.event.time}')`}</Text>
				<Icon fill={colors.calm} category={props.event.category} value={props.event.value} width="60" height="60" />
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
				<Icon fill={colors.type} category={props.event.category} value={props.event.value} width="60" height="60" />
			</View>
			<View style={styles.labelContainer}>
				{rightEventLabel}
			</View>
		</View>
	);
}

Event.propTypes = {
	event: React.PropTypes.object.isRequired
};

export default Event;