import 'react-native';
import React from 'react';
import TeamCard from '../../app/components/TeamCard/TeamCard.js';
import Details from '../../app/lib/match_sample.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('TeamCard renders correctly', () => {
    const tree = renderer.create(
        <TeamCard teamDetails={Details.team_data[0]} left={true} />
    );
});
