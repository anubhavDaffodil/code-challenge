import React from 'react';
import MatchDetail from './MatchDetail';
import details from '../../lib/match_sample.json';

const MatchDetailContainer = props => {
	return (
		<MatchDetail
			matchDetails={details}
			/>
	);
};

MatchDetailContainer.propTypes = {
	navigator: React.PropTypes.object,
};

export default MatchDetailContainer;