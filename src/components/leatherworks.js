import React from 'react';
import GenericBuilding from './generic.js'
import State from './dispatcher.js'

class Leatherworks extends GenericBuilding {
  constructor(props) {
    super(props)
    }
  turnAction(){
  }
  render() {
    return (
      <div>
        leaterworks
      </div>
    )
  }
}
export default Leatherworks;
