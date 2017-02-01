import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../config/styles';
import styles from './styles';
import Icon from '../../components/Icon';
import TeamCard from '../../components/TeamCard';
import ScrollableTabView from 'react-native-scrollable-tab-view';

const MatchDetail = props => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.matchName}>{props.details.name}</Text>
				<View style={styles.teams}>
					<TeamCard details={props.details.team_data[0]} left={true} />
					<Text style={styles.score}>{props.details.team_data[0].score} - {props.details.team_data[1].score}</Text>
					<TeamCard details={props.details.team_data[1]} />
				</View>
			</View>
			<View style={styles.body}>
				<ScrollableTabView
					tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
					tabBarActiveTextColor={colors.royal}
					tabBarInactiveTextColor={colors.stable}
					tabBarBackgroundColor={colors.dark}
					>
					<View tabLabel="Summary" />
					<View tabLabel="Events" />
					<View tabLabel="Teams" />
				</ScrollableTabView>
			</View>
		</View>
	);
};

MatchDetail.propTypes = {
	details: React.PropTypes.object
};

export default MatchDetail;
