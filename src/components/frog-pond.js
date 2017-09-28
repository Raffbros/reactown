import React from 'react';
import GenericBuilding from './generic.js'
import State from './dispatcher.js'

class FrogPond extends GenericBuilding {
  constructor(props) {
    super(props)
  }

  turnAction(){
    State.set("frogs", State.get("frogs")+1);
  }

  render() {
    return (
      <div>
        ribbit
      </div>
    )
  }
}

export default FrogPond;
