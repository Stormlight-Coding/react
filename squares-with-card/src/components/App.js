import React from 'react';

import Title from './Title';
import InfoCard from './InfoCard';
import './App.css';


const App = (props) => {
    return (
        <div>
            <Title class="blueSquare" text="white on blue" color="white" isImportant={true} />
            <Title class = "redSquare" text="blue on red" color="blue" isImportant={false} />
            <Title class="pinkSquare" text="green on pink" color="green" isImportant={false} />
            <InfoCard class="card" width="18rem"/>
        </div>
    )
}

export default App
