import React from 'react';
import './grid.css';
let grid = [];

const setupGrid = function (props) {
    console.log('hork');
    grid = ([...new Array(props.size)]).map(r => {
        return (
            <div>
                {([...new Array(props.size)]).map(c => {
                  console.log('hork');
                    return (
                        <div>
                            Hork
                        </div>
                    );
                })}
            </div>
        );
    });
    return grid;
}

const Grid = function (props) {
    if (!grid.length) {
        setupGrid(props);
    }

    return (
        <div className="sweater">
            Hello, Nerdos
            <br />
            <div className="thegrid">
                {grid}
            </div>
        </div>
    );
}

export default Grid;

