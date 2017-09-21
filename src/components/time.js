import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

window.reactown = window.reactown || {};
window.reactown.time = window.reactown.time || {};

const goToNextShmeek = function () {
    if (window.reactown.time.shmeek == null) window.reactown.time.shmeek = 0;
    window.reactown.time.shmeek++;
}

class TurnButton extends Component {
    constructor() {
        super();
        goToNextShmeek();
    }
    render() {
        var self = this;
        return (
            <div className="butt-holder">
                <Button onClick={() => {
                    goToNextShmeek();
                    this.props.onNextShmeek(WhatTimeIsIt());
                }}>
                    Next Turn
                </Button>
            </div>
        );
    }
}

const WhatTimeIsIt = () => window.reactown.time.shmeek;

export {
    TurnButton,
    WhatTimeIsIt
}

export default{
    TurnButton,
    WhatTimeIsIt
}
