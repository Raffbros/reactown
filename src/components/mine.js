import React from 'react';
import GenericBuilding from './generic.js'
import State from './dispatcher.js'

class Mine extends GenericBuilding {
  constructor(props) {
    super(props)
  }

  turnAction(){
    State.set("ore", State.get("ore")+1);
  }

  render() {
    return (
      <div>
        Also do random events for better stuff like mud opals and supergems
      </div>
    )
  }
}

export default Mine;
