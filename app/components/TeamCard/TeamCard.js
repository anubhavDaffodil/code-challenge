import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Icon from '../Icon';

export default props => {
	return (
		<View style={styles.container}>
			<Icon name={props.details.side} />
			<Text style={styles.name}>{props.details.name}</Text>
		</View>
	);
}