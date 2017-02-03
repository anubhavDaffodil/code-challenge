import 'react-native';
import React from 'react';
import SummaryTab from '../../app/components/SummaryTab/SummaryTab.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('SummaryTab renders correctly', () => {
    const tree = renderer.create(
        <SummaryTab />
    );
});
