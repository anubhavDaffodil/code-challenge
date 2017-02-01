import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Icon from '../../components/Icon';

const MatchDetail = props => {
	return (
		<View style={styles.container}>
			<Icon name="Goal"/>
			<Icon name="OwnGoal"/>
			<Icon name="Whistle"/>
			<Icon name="YellowCard"/>
			<Icon name="SecondYellowCard"/>
			<Icon name="RedCard"/>
			<Icon name="Substitution"/>
			<Icon name="PenaltyMissed"/>
			<Icon name="PenaltyScored"/>
			<Text style={styles.text}>{props.details.toString()}</Text>
		</View>
	);
};

MatchDetail.propTypes = {
	details: React.PropTypes.object
};

export default MatchDetail;
