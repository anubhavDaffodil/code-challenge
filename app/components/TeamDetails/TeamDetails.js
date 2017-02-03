import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import defaultStyles, { colors } from '../../config/styles';

const TeamDetails = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.subHeader}>{`${props.teamDetails.name} (${props.teamDetails.num_players})`}</Text>
			<View style={styles.subContainer}>
				<Text style={styles.info}>Half Time Score: <Text style={defaultStyles.highlightValue}>{props.teamDetails.halfscore || '-'}</Text></Text>
				<Text style={styles.info}>Full Time Score: <Text style={defaultStyles.highlightValue}>{props.teamDetails.ninetyscore || '-'}</Text></Text>
				<Text style={styles.info}>Extra Score: <Text style={defaultStyles.highlightValue}>{props.teamDetails.extrascore || '-'}</Text></Text>
				<Text style={styles.info}>Shootout Score: <Text style={defaultStyles.highlightValue}>{props.teamDetails.shootoutscore || '-'}</Text></Text>
				<View style={styles.shootoutsContainer}>
					{props.teamDetails.shootout.map((event, i) => <Icon key={i} value={event} category="penaltyshot" />)}
				</View>
			</View>
		</View>
	);
}

TeamDetails.propTypes = {
	teamDetails: React.PropTypes.object.isRequired
};

export default TeamDetails;