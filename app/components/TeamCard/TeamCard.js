import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import { colors } from '../../config/styles';

const TeamCard = props => {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				{
					props.teamDetails.side === 'Home' &&
					<View style={props.left ? styles.sideIconLeft : styles.sideIconRight}>
						<Icon name="Home" width={32} height={32} fill={colors.type} />
					</View>
				}
				<Image source={{ uri: props.teamDetails.logo_url }} style={styles.logo} />
			</View>
			<Text style={styles.teamName}>{props.teamDetails.name}</Text>
		</View>
	);
}

TeamCard.propTypes = {
	teamDetails: React.PropTypes.object,
	left: React.PropTypes.bool
};

export default TeamCard;