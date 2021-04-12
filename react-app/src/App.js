import React, { useState, useEffect } from 'react';
import './App.css';

import Api from './Api';

import CardPositions from './components/CardPositions';

export default () => {
    const [positions, setPositions] = useState([])

    useEffect(() => {
        const loading = async () => {
            let routes = await Api.getRouteList();
            setPositions(routes[0].routes);
        }
        loading(); 
    }, [])

  return (
    <>
        {positions &&
            <div className="app">
                <div className="title">
                    Imersão Full Cycle #2
                </div>
                {positions.map((i,k) => (
                    <div className="app-card">
                        <CardPositions 
                            key={k}
                            data={i}
                        />
                    </div>
                ))}
            </div>
        }
    </>
  );
}