import 'react-native';
import React from 'react';
import Event from '../../app/components/Event/Event.js';
import Details from '../../app/lib/match_sample.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Event renders correctly', () => {
    const tree = renderer.create(
        <Event event={Details.events[0]} homeOnLeft={Details.team_data[0].side === 'Home'} />
    );
});
