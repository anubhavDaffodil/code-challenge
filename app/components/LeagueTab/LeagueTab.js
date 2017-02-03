import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import defaultStyles from '../../config/styles';
import moment from 'moment';

const LeagueTab = props => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={defaultStyles.headerText}>{props.matchDetails.pool}</Text>
				<View style={styles.subHeader}>
					<Text style={defaultStyles.subHeaderText}>Day {props.matchDetails.match_day}</Text>
					<Text style={defaultStyles.subHeaderText}>{`${props.matchDetails.round_name} ${props.matchDetails.round}`}</Text>
				</View>
			</View>
			<View style={styles.body}>
				<View style={styles.location}>
					<Text style={defaultStyles.highlight1}>{props.matchDetails.city} </Text>
					<Text style={defaultStyles.highlight2}>{props.matchDetails.venue_name}</Text>
				</View>
				<Text style={defaultStyles.info}>{moment(props.matchDetails.local_date).format('MMMM Do YYYY, h:mm:ss a').toString()}</Text>
				<Text style={defaultStyles.info}>Match Type: {props.matchDetails.match_type}</Text>
				<Text style={defaultStyles.info}>Referee: {props.matchDetails.referee}</Text>
			</View>
		</View>
	);
}

LeagueTab.propTypes = {
	matchDetails: React.PropTypes.object.isRequired
};

export default LeagueTab;