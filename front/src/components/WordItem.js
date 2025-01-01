import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

const WordItem = ({word}) => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                <div className="card">
                    <div className="card-body">{word}</div>
                </div>
            </div>
            
        </>
    )
}

export default WordItem