import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Icon from '../Icon';
import defaultStyles from '../../config/styles';

const TeamDetails = (props) => {
	return (
		<View style={styles.container}>
			<Text style={defaultStyles.labelText}>{`${props.teamDetails.name} `}<Text style={defaultStyles.info}>{`(${props.teamDetails.num_players})`}</Text></Text>
			<View style={styles.subContainer}>
				<Text style={defaultStyles.info}>Half Time Score: <Text style={defaultStyles.highlightValue}>{props.teamDetails.halfscore || '-'}</Text></Text>
				<Text style={defaultStyles.info}>Full Time Score: <Text style={defaultStyles.highlightValue}>{props.teamDetails.ninetyscore || '-'}</Text></Text>
				<Text style={defaultStyles.info}>Extra Score: <Text style={defaultStyles.highlightValue}>{props.teamDetails.extrascore || '-'}</Text></Text>
				<Text style={defaultStyles.info}>Shootout Score: <Text style={defaultStyles.highlightValue}>{props.teamDetails.shootoutscore || '-'}</Text></Text>
				<View style={styles.shootoutsContainer}>
					{props.teamDetails.shootout.map((event, i) => <Icon key={i} value={event} category="penaltyshot" height={45} width={45} />)}
				</View>
			</View>
		</View>
	);
}

TeamDetails.propTypes = {
	teamDetails: React.PropTypes.object.isRequired
};

export default TeamDetails;