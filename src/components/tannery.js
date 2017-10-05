import React from 'react';
import GenericBuilding from './generic.js'
import State from './dispatcher.js'

class Tannery extends GenericBuilding {
  constructor(props) {
    super(props)
    }
  turnAction(){
  }
  render() {
    return (
      <div>
        tannery
      </div>
    )
  }
}
export default Tannery;
