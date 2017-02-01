import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Icon from '../../components/Icon';
import TeamCard from '../../components/TeamCard';

const MatchDetail = props => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.name}>{props.details.name}</Text>
				<View style={styles.teams}>
					<TeamCard details={props.details.team_data[0]} />
					<Text style={styles.score}>{props.details.team_data[0].score} : {props.details.team_data[1].score}</Text>
					<TeamCard details={props.details.team_data[1]} />
				</View>
			</View>
			<View style={styles.body}>
			</View>
		</View>
	);
};

MatchDetail.propTypes = {
	details: React.PropTypes.object
};

export default MatchDetail;
