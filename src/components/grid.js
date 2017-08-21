import React from 'react';
import './grid.css';
let grid = [];

const setupGrid = function (props) {
    console.log('hork');
    grid = ([...new Array(props.size)]).map(r => {
        return (
            <tr>
                {([...new Array(props.size)]).map(c => {
                  console.log('hork');
                    return (
                        <td>
                            Hork
                        </td>
                    );
                })}
            </tr>
        );
    });
    return grid;
}

const Grid = function (props) {
    if (!grid.length) {
        setupGrid(props);
    }

    return (
        <div className="thegrid">
            Hello, Nerdos
            <br />
            <table>
                {grid}
            </table>
        </div>
    );
}

export default Grid;

