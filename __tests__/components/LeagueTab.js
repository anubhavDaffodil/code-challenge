import 'react-native';
import React from 'react';
import LeagueTab from '../../app/components/LeagueTab/LeagueTab.js';
import Details from '../../app/lib/match_sample.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('LeagueTab renders correctly', () => {
    const tree = renderer.create(
        <LeagueTab matchDetails={Details} />
    );
});
