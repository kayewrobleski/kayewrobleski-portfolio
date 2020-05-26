import React from 'react';
import Spring from 'react-spring';

export default function withFadeIn(WrappedComponent) {
	return class extends React.Component {
		
		constructor(props) {
			super(props);
		}
		
		render() {
			return <Spring
				from={{ opacity: 0 }}
				to={{ opacity: 1 }}
				config={{ duration: 500 }}>
				{props => <div style={props} className={this.props.className}><WrappedComponent {...this.props} /></div>}
			</Spring>
		}
	}
}