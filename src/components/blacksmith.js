import React from 'react';
import GenericBuilding from './generic.js'
import State from './dispatcher.js'

class Blacksmith extends GenericBuilding {
  constructor(props) {
    super(props)
  }

  turnAction(){
      State.set("tools", State.get("tools")+1);
  }

  render() {
    return (
      <div>
        blacksmith
      </div>
    )
  }
}

export default Blacksmith;
