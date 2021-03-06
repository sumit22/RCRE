import {ES} from 'rcre';
import React from 'react';

export class Input extends React.Component<any, any> {
    render() {
        return (
            <ES name={this.props.name} disabled={this.props.disabled} clearWhenDestroy={this.props.clearWhenDestroy}>
                {({$data}, context) => {
                    return (
                        <input
                            value={$data.name}
                            onChange={event => context.container.$setData(this.props.name, event.target.value)}
                        />
                    );
                }}
            </ES>
        );
    }
}