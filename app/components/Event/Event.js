import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Event = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.eventLabel}>{props.event.label}</Text>
        </View>
    );
}

Event.propTypes = {
    event: React.PropTypes.object
};

export default Event;