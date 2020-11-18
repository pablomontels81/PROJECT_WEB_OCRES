import React from 'react';

class Titre extends React.PureComponent {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
		super(props);
    }
    render() {
        return (
            <p className="title">{this.props.name}</p>
        )
    }
}

export default Titre;