import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const props = {
    title: 'React',
    description: "A javascript library for building user interfaces."
};

ReactDOM.render(App(props), document.getElementById('root'))
