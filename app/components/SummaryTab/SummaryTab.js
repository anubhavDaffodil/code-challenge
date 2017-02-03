import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import moment from 'moment';
import TeamDetails from '../TeamDetails';
import defaultStyles from '../../config/styles';

const SummaryTab = props => {
	return (
		<View style={styles.container}>
			<Text style={defaultStyles.headerText1}>{props.matchDetails.name}</Text>
			<View style={styles.halfTimes}>
				<Text style={styles.key}>First Half: <Text style={styles.highlight}>{`${props.matchDetails.first_half_time}'`}</Text></Text>
				<Text style={styles.highlight2}>{`${moment(props.matchDetails.first_half_start).format('LT')} - ${moment(props.matchDetails.first_half_end).format('LT')}`}</Text>
			</View>
			<View style={styles.halfTimes}>
				<Text style={styles.key}>Second Half:</Text>
				<Text style={styles.highlight1}>{`${props.matchDetails.second_half_time}'`}</Text>
				<Text style={styles.highlight2}>{`${moment(props.matchDetails.second_half_start).format('LT')} - ${moment(props.matchDetails.second_half_end).format('LT')}`}</Text>
			</View>
			<View style={styles.teamInfo}>
				{props.matchDetails.team_data.map(teamDetails => <TeamDetails key={teamDetails.teamref} teamDetails={teamDetails} />)}
			</View>
		</View>
	);
}

SummaryTab.propTypes = {
	matchDetails: React.PropTypes.object.isRequired
};

export default SummaryTab;