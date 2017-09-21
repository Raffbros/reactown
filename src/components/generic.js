import React from 'react';

class GenericBuilding extends React.Component{
    constructor(props) {
        super(props)
    }

    turnAction(options) {
        throw new Error('Method Not Implemented');
    }

    render() {
        return (
            <div>
                wakka wakka
            </div>
        );
    }
};

export default GenericBuilding;
