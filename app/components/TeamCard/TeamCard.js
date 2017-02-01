import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import { colors } from '../../config/styles';

export default props => {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				{
					props.details.side === 'Home' &&
					<View style={props.left ? styles.sideIconLeft : styles.sideIconRight}>
						<Icon name="Home" width={32} height={32} fill={colors.type} />
					</View>
				}
				<Image source={{ uri: props.details.logo_url }} style={styles.logo} />
			</View>
			<Text style={styles.teamName}>{props.details.name}</Text>
		</View>
	);
}