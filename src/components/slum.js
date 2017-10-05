import React from 'react';
import GenericBuilding from './generic.js'
import State from './dispatcher.js'

class Slum extends GenericBuilding {
  constructor(props) {
    super(props)
    }
  turnAction(){
  }
  render() {
    return (
      <div>
        slum
      </div>
    )
  }
}
export default Slum;
