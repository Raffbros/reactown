import React from 'react';
import GenericBuilding from './generic.js'
import State from './dispatcher.js'

class Hamlet extends GenericBuilding {
  constructor(props) {
    super(props)
    }

  turnAction(){
  }

  render() {
    return (
      <div>
        hamlet
      </div>
    )
  }
}
export default Hamlet;
