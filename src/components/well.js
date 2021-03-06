import React from 'react';
import GenericBuilding from './generic.js'
import State from './dispatcher.js'

class Well extends GenericBuilding {
  constructor(props) {
    super(props)
  }
  turnAction() {
  }
  
  render() {
    return (
      <div>
        <div className="ascii-area">

<span>       ._____.<br /></span>
<span>       | _|_ |<br /></span>
<span>       |/ | \|<br /></span>
<span>       |  |  |<br /></span>
<span>""''"'"|\_|_/|"'"'""'<br /></span>
<span>  `    | -  _|    "  <br /></span>
<span>       |     |  .    <br /></span>
<span>        ^^^-^        <br /></span>
        </div>
      </div>
    );
  }
};

export default Well;
