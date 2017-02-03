import React, { Component } from 'react';
import { ListView } from 'react-native';
import Event from '../Event';

class LiveTab extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds.cloneWithRows(props.events.sort((a, b) => {
				if (new Date(a.timestamp) < new Date(b.timestamp))
					return -1;
				if (new Date(a.timestamp) > new Date(b.timestamp))
					return 1;
				return 0;
			}))
		};
	}
	render() {
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData) => <Event event={rowData} homeOnLeft={this.props.homeOnLeft} />}
				/>
		);
	}
}

LiveTab.propTypes = {
	events: React.PropTypes.array.isRequired,
	homeOnLeft: React.PropTypes.bool
};

export default LiveTab;