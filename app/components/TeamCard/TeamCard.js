import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import defaultStyles, { colors } from '../../config/styles';

const TeamCard = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				{
					props.teamDetails.side === 'Home' &&
					<View style={[styles.sideIcon, props.left ? styles.sideIconLeft : styles.sideIconRight]}>
						<Icon value="Home" width={25} height={25} fill={colors.type} />
					</View>
				}
				<Image source={{ uri: props.teamDetails.logo_url }} style={styles.logo} />
			</View>
			<Text style={defaultStyles.info}>{props.teamDetails.name}</Text>
		</View>
	);
}

TeamCard.propTypes = {
	teamDetails: React.PropTypes.object.isRequired,
	left: React.PropTypes.bool
};

export default TeamCard;