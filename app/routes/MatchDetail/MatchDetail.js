import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Icon from '../../components/Icon';

const MatchDetail = props => {
	return (
		<View style={styles.container}>
			<Icon name="goal" />
			{/*<Text style={styles.text}>{JSON.stringify(props.details)}</Text>*/}
		</View>
	);
};

MatchDetail.propTypes = {
	details: React.PropTypes.object
};

export default MatchDetail;
