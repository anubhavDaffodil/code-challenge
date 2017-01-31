import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const MatchDetail = props => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{JSON.stringify(props.details)}</Text>
		</View>
	);
};

MatchDetail.propTypes = {
	details: React.PropTypes.object
};

export default MatchDetail;
