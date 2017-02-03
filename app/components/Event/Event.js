import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import defaultStyles, { colors } from '../../config/styles';

const Event = (props) => {
	let leftEventLabel;
	let rightEventLabel;

	if (props.event.side === 'both')
		return (
			<View style={styles.matchEventContainer}>
				<Icon fill={colors.dark} category={props.event.category} value={props.event.value} width="60" height="60" />
				<Text style={styles.labelCenterText}>{props.event.label}<Text style={defaultStyles.info}> {props.event.time}'</Text></Text>
				<Icon fill={colors.dark} category={props.event.category} value={props.event.value} width="60" height="60" />
			</View>
		);

	if (props.event.side === 'home') {
		if (props.homeOnLeft) {
			leftEventLabel = <Text style={[defaultStyles.labelText, styles.labelLeftText]}><Text style={defaultStyles.info}>{props.event.time}' </Text>{props.event.label}</Text>;
			if (props.event.additionalInfo)
				rightEventLabel = <Text style={[defaultStyles.labelAdditionalText, styles.labelRightAdditionalText]}>{props.event.additionalInfo}</Text>;
		}
		else {
			rightEventLabel = <Text style={[defaultStyles.labelText, styles.labelRightText]}>{props.event.label}<Text style={defaultStyles.info}> {props.event.time}'</Text></Text>;
			if (props.event.additionalInfo)
				leftEventLabel = <Text style={[defaultStyles.labelAdditionalText, styles.labelLeftAdditionalText]}>{props.event.additionalInfo}</Text>;
		}
	}
	else if (props.event.side === 'away') {
		if (!props.homeOnLeft) {
			leftEventLabel = <Text style={[defaultStyles.labelText, styles.labelLeftText]}><Text style={defaultStyles.info}>{props.event.time}' </Text>{props.event.label}</Text>;
			if (props.event.additionalInfo)
				rightEventLabel = <Text style={[defaultStyles.labelAdditionalText, styles.labelRightAdditionalText]}>{props.event.additionalInfo}</Text>;
		}
		else {
			rightEventLabel = <Text style={[defaultStyles.labelText, styles.labelRightText]}>{props.event.label}<Text style={defaultStyles.info}> {props.event.time}'</Text></Text>;
			if (props.event.additionalInfo)
				leftEventLabel = <Text style={[defaultStyles.labelAdditionalText, styles.labelLeftAdditionalText]}>{props.event.additionalInfo}</Text>;
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
	event: React.PropTypes.object.isRequired,
	homeOnLeft: React.PropTypes.bool
};

export default Event;