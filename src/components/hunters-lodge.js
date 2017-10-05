import React from 'react';
import GenericBuilding from './generic.js'
import State from './dispatcher.js'

class HuntersLodge extends GenericBuilding {
  constructor(props) {
    super(props)
  }

  turnAction(){
    State.set("food", State.get("food")+1);
  }

  render() {
    return (
      <div>
        lodge
      </div>
    )
  }
}

export default HuntersLodge;
