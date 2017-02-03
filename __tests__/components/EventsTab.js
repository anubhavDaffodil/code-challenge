import 'react-native';
import React from 'react';
import EventsTab from '../../app/components/EventsTab/EventsTab.js';
import Details from '../../app/lib/match_sample.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('EventsTab renders correctly', () => {
    const tree = renderer.create(
        <EventsTab tabLabel="Live" homeOnLeft={Details.team_data[0].side === 'Home'} events={Details.events} />
    );
});
