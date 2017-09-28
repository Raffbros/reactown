import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import AutoComplete from 'material-ui/AutoComplete';
import shortid from 'shortid';

import Tavern from './tavern';
import Well from './well';
import Blacksmith from './blacksmith';
import Farm from './farm';
import WizardTower from './wizard-tower';
import Slum from './slum';
import Market from './market';
import Hamlet from './hamlet';
import HuntersLodge from './hunters-lodge';
import FrogPond from './frog-pond';
import Mine from './mine'

import './grid.css';

const TYPES = {
    Button,
    Tavern,
    Well,
    Blacksmith,
    Farm,
    WizardTower,
    Slum,
    Market,
    HuntersLodge,
    Hamlet,
    FrogPond,
    Mine,

}

const TYPE_DEFAULT_PROPS = {
    Button: function () {
        return {
            onClick: this.addToGrid.bind(this, ...arguments),
            bsStyle: "primary",
            children: `Make A ${this.state.whatToBuild}`
        };
    },
    Tavern: {}
}

const makeGrid = function (gridObjects) {
    return gridObjects.map((c, x) => {
        return (
            <div>
                {c.map((r, y) => {
                    let Item = TYPES[r.type];
                    return (
                        <div className="grid-item" >
                            <Item ref={r.ref} {...gridObjects[x][y].props} />
                        </div>
                    );
                })}
            </div>
        );
    });
}

class Grid extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            whatToBuild: 'Tavern',
        };
        this.state.grid = this.setupGrid(props);

        this.handleUpdateInput = this.handleUpdateInput.bind(this);

        this.doAllGridActions = this.doAllGridActions.bind(this);
    }

    setupGrid (props) {
        return ([...new Array(props.size)]).map((r, x) => {
            return ([...new Array(props.size)]).map((c, y) => {
                return {
                    type: 'Button',
                    props: {
                        onClick: this.addToGrid.bind(this, x, y),
                        bsStyle: "primary",
                        children: `Make A ${this.state.whatToBuild}`
                    },
                    ref: shortid.generate()
                };
            })
        });
    }

    addToGrid (x, y) {
        var grid = _.cloneDeep(this.state.grid);
        var nextItemProps = TYPE_DEFAULT_PROPS[this.state.whatToBuild];
        nextItemProps = _.isFunction(nextItemProps) ? nextItemProps.apply(this, arguments) : nextItemProps;
        grid[x][y] = {
            type: this.state.whatToBuild,
            props: nextItemProps,
            ref: shortid.generate()
        };
        this.setState({grid});
    }

    doAllGridActions () {
        this.state.grid.forEach(row => {
            row.forEach(col => {
                if (this.refs[col.ref].turnAction != null) this.refs[col.ref].turnAction();
            })
        })
    }

    handleUpdateInput = (value) => {
      this.setState({whatToBuild: value});
    };



    render() {
        return (
            <div className="sweater">
                Hello, Nerdos
                <br />
                <AutoComplete
                  floatingLabelText="Pick What You Wanna Build"
                  hintText="Pick What You Wanna Build"
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={Object.keys(TYPES)}
                  onUpdateInput={this.handleUpdateInput}
                />
                <div className="thegrid">
                    {makeGrid(this.state.grid)}
                </div>

            </div>
        );
    }
}

export default Grid;
