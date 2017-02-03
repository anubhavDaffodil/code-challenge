import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import moment from 'moment';
import TeamDetails from '../TeamDetails';
import defaultStyles from '../../config/styles';

const HighlightsTab = (props) => {
	return (
		<View style={styles.container}>
			<Text style={defaultStyles.headerText1}>{props.matchDetails.name}</Text>
			<View style={styles.horizontalContainer}>
				{props.matchDetails.team_data.map((teamDetails) => <TeamDetails key={teamDetails.teamref} teamDetails={teamDetails} />)}
			</View>
			<View style={styles.horizontalContainer}>
				<View style={styles.horizontalItemContainer}>
					<Text style={defaultStyles.labelText}>First Half: <Text style={defaultStyles.highlightValue}>{`${props.matchDetails.first_half_time}'`}</Text></Text>
					<Text style={defaultStyles.info}>{`${moment(props.matchDetails.first_half_start).format('LT')} - ${moment(props.matchDetails.first_half_end).format('LT')}`}</Text>
				</View>
				<View style={styles.horizontalItemContainer}>
					<Text style={defaultStyles.labelText}>Second Half: <Text style={defaultStyles.highlightValue}>{`${props.matchDetails.second_half_time}'`}</Text></Text>
					<Text style={defaultStyles.info}>{`${moment(props.matchDetails.second_half_start).format('LT')} - ${moment(props.matchDetails.second_half_end).format('LT')}`}</Text>
				</View>
			</View>
		</View>
	);
}

HighlightsTab.propTypes = {
	matchDetails: React.PropTypes.object.isRequired
};

export default HighlightsTab;