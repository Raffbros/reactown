import React from 'react';
import GenericBuilding from './generic.js'
import State from './dispatcher.js'

class Tavern extends GenericBuilding {
    constructor(props) {
        super(props)
    }

    turnAction(){
        State.set("apples", State.get("apples")+1);
    }

    render() {
        return (
            <div>
                <div className="ascii-area">
<span>       '::::.<br /></span>
<span>        _____A_<br /></span>
<span>       /      /\<br /></span>
<span>    __/__/\__/  \___<br /></span>
<span>---/__|" '' "| /___/\----<br /></span>
<span>   |''|"'||'"| |' '||<br /></span>
<span>   '""'""))""'"'""""'<br /></span>
                </div>
            </div>
        );
    }
};

export default Tavern;
