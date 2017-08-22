import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import AutoComplete from 'material-ui/AutoComplete';

import Tavern from './tavern';

import './grid.css';

const TYPES = {
    Button,
    Tavern
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
            whatToBuild: 'Button',
            grid: this.setupGrid(props)
        };

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
                        children: "Make A Tavern"
                    }
                };
            })
        });
    }

    addToGrid (x, y) {
        var grid = _.cloneDeep(this.state.grid);
        grid[x][y] = {
            type: this.state.whatToBuild,
            props: {}
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

