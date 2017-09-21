import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import AutoComplete from 'material-ui/AutoComplete';

import Tavern from './tavern';
import Well from './well';
import Blacksmith from './blacksmith';
import Farm from './farm'
import WizardTower from './wizard-tower'

import './grid.css';

const TYPES = {
    Button,
    Tavern,
    Well,
    Blacksmith,
    Farm,
    WizardTower
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
                            <Item {...gridObjects[x][y].props} />
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
                    }
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
            props: nextItemProps
        };
        this.setState({grid});
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
