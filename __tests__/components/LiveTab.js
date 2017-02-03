import 'react-native';
import React from 'react';
import LiveTab from '../../app/components/LiveTab/LiveTab.js';
import Details from '../../app/lib/match_sample.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('LiveTab renders correctly', () => {
    const tree = renderer.create(
        <LiveTab tabLabel="Live" homeOnLeft={Details.team_data[0].side === 'Home'} events={Details.events} />
    );
});
