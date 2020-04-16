const helloReact = React.createElement("div", null,
    React.createElement('h1', null, 'Hello Dojo!'),
    React.createElement('p', null, 'Things i need to know:'),
    React.createElement('li', null, 'Learn React'),
    React.createElement('li', null, 'Climb Mt Everest'),
    React.createElement('li', null, 'Run a Marathon'),
    React.createElement('li', null, 'Feed the Plants'),
  );

ReactDOM.render(helloReact, document.getElementById("root"))
