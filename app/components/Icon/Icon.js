import React from 'react';
import { View } from 'react-native';
import SvgIcon from 'react-native-svg-icon';
import svgs from './svgs';
import styles from './styles';

function getIconName(category, value) {
	switch (category) {
		case 'period_change':
			return 'Whistle';
		case 'goal':
			return value;				// Assuming value will be either Goal or OwnGoal
		case 'substitution_on':
			return 'SubstitutionOn';
		case 'substitution_off':
			return 'SubstitutionOff';
		case 'booking':
			return `${value}Card`;		// Assuming value will be 'Yellow', 'Red', or 'SecondYellow'
		case 'penaltyshot':
			return `Penalty${value}`	// Assuming value will be 'Scored', 'Saved', or 'Missed'
		default:
			return value;
	}
}

const Icon = (props) => <View style={styles.container}><SvgIcon {...props} name={getIconName(props.category, props.value)} svgs={svgs} /></View>;

Icon.propTypes = {
	value: React.PropTypes.string.isRequired,
	category: React.PropTypes.string
};

export default Icon;