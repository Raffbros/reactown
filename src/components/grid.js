import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';

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
        this.state = {grid: this.setupGrid(props)};
    }

    addToGrid (x, y) {
        var grid = _.cloneDeep(this.state.grid);
        grid[x][y] = {
            type: 'Tavern',
            props: {}
        };
        this.setState({grid});
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

    render() {
        return (
            <div className="sweater">
                Hello, Nerdos
                <br />
                <div className="thegrid">
                    {makeGrid(this.state.grid)}
                </div>
            </div>
        );
    }
}

export default Grid;

