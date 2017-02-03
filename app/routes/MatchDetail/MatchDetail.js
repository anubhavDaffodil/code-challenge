import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../config/styles';
import styles from './styles';
import TeamCard from '../../components/TeamCard';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SummaryTab from '../../components/SummaryTab';
import EventsTab from '../../components/EventsTab';
import LeagueTab from '../../components/LeagueTab';

const MatchDetail = props => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.competitionName}>{props.matchDetails.competition_name}</Text>
				<Text style={styles.seasonName}>{props.matchDetails.season_name}</Text>
				<View style={styles.teams}>
					<TeamCard teamDetails={props.matchDetails.team_data[0]} left={true} />
					<View style={styles.scoreContainer}>
						<Text style={styles.score}>{props.matchDetails.team_data[0].score} - {props.matchDetails.team_data[1].score}</Text>
						{
							props.matchDetails.second_half_start &&
							<Text style={styles.halfscore}>{props.matchDetails.team_data[0].halfscore} - {props.matchDetails.team_data[1].halfscore}</Text>
						}
					</View>
					<TeamCard teamDetails={props.matchDetails.team_data[1]} />
				</View>
			</View>
			<View style={styles.body}>
				<ScrollableTabView
					tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
					tabBarActiveTextColor={colors.calm}
					tabBarInactiveTextColor={colors.stable}
					tabBarBackgroundColor={colors.type}
					>
					<SummaryTab tabLabel="Highlights" matchDetails={props.matchDetails} />
					<EventsTab tabLabel="Live" homeOnLeft={props.matchDetails.team_data[0].side === 'Home'} events={props.matchDetails.events} />
					<LeagueTab tabLabel="League" matchDetails={props.matchDetails} />
				</ScrollableTabView>
			</View>
		</View>
	);
};

MatchDetail.propTypes = {
	matchDetails: React.PropTypes.object
};

export default MatchDetail;
