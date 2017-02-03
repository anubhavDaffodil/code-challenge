import 'react-native';
import React from 'react';
import HighlightsTab from '../../app/components/HighlightsTab/HighlightsTab.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('HighlightsTab renders correctly', () => {
    const tree = renderer.create(
        <HighlightsTab />
    );
});
